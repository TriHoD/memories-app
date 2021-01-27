import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });
        
        if (!existingUser) return res.status(404).json({ message: 'User does not exist' });
        
        const isPasswordCorrect = await bcryptjs.compare(password, existingUser.password);
        
        if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id, }, 'test', { expiresIn:  "1h" } );
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).jsom({ message: 'Something went wrong' });
    }
};

export const signUp = async (req, res) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: 'Email already used' }) 
        
        if(password !== confirmPassword) return res.status(400).json({ message: 'Password do not match' })

        const hashPassword = await bcryptjs.hash(password, 12);

        const result = await User.create({ email, password: hashPassword, name: `${firstName} ${lastName}`  });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });
        res.status(200).json({ result: result, token });
    } catch (error) {
        res.status(500).json({ message: 'Oops... something went wrong' });
    }
};
