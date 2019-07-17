const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Viju',
            room: 'Beast Sec'
        }, {
            id: '2',
            name: 'Vijay',
            room: 'Beast'
        }, {
            id: '3',
            name: 'Vsb',
            room: 'Beast Sec'
        }]
    });
    it('Should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Viju',
            room: 'Lets chat'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('Should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        
        expect(user.id).toBe(userId);
        expect(users.users.length).tobe(2);
    });

    it('Should not remove a user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        
        expect(user).toNotExist();
        expect(users.users.length).tobe(3);
    });

    it('Should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('Should not find user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('Should return names for Beast Sec', () => {
        var userList = users.getUserList('Beast Sec');

        expect(userList).toEqual(['Viju', 'Vsb']);
    });

    it('Should return names for Beast', () => {
        var userList = users.getUserList('Beast');

        expect(userList).toEqual(['Vijay']);
    });
});