const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
} , {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed:true, 
    completedAt:333
}];

beforeEach((done) => {
    // remove database before each test case
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos' , () => {
    it('should create new todo' , (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err , res) => {
                if(err){
                    return done(err);
                }

                Todo.find({text}).then(todos => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);   
                    done();
                }).catch(err => done(err));
            })
    });

    it('should not create todo with invalid body data', done => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err , res) => {
                if(err){
                    return done(err);
                }
                Todo.find({}).then(todos => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch(err => done(err));
            });
    });
});

describe('GET /todos ' , () => {
    it('should get all todos' , (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /todos/:id' , () => {
    it('it should return todo doc' , (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return 404 if todo not found' , (done) => {
        //make sure you get 404 back
        var hexId = new ObjectID();

        request(app)
            .get(`/todos/${hexId.toHexString()}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 for non-object ids' , done => {
        request(app)
            .get('/todos/123')
            .expect(404)
            .end(done);
    });
});

describe('PATCH /todos/:id' , () => {
    it('should update the todo' , (done) => {
        var id = todos[0]._id.toHexString();
        var text = "bla bla bla"

        request(app)
            .patch(`/todos/${id}`)
            .send({completed : true , text: text })
            .expect(200)
            .expect(res => {
                expect(res.body.todo.completed).toBe(true);
                expect(res.body.todo.text).toBe(text);
            })
            .end(done);
    });

    it('should clear completedAt when todo is not completed' , done =>{
        var id = todos[1]._id.toHexString();
        var text = "bla bla 22"

        request(app)
            .patch(`/todos/${id}`)
            .send({completed : false , text: text })
            .expect(200)
            .expect(res => {
                expect(res.body.todo.completed).toBe(false);
                expect(res.body.todo.completedAt).toBe(null);
                expect(res.body.todo.text).toBe(text);
            })
            .end(done);
    });
})