import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
     users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Bob Smith' },
    ];

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    findAll() {
        return this.users;
    }

    
}
