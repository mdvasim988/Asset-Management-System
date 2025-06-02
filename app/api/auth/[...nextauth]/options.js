import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import dbconnection from '@/connection/conn';
import USER from '@/models/user.models';


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                await dbconnection();
                try
                {
                    const user = await USER.findOne({email : credentials.email});
                    if(!user)
                    {
                        throw new Error('No user found with this email');
                    }

                    const isPassCorrect = (user.password==credentials.password);
                    if(!isPassCorrect)
                    {
                        throw new Error('Invalid Password');
                    }
                    return user;
                }
                catch(err)
                {
                    throw new Error(err);
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    secret: 'next',
    callbacks: {
        async jwt({ token, user }) {
            if(user)
            {
                // token.id = user._id?.toString();
                token.eid = user.eid;
                token.name = user.name;
                token.email = user.email;
                token.role = user.role;
            }
            return token
        },
        async session({ session, token }) {
            if(token)
            {
                // session.user.id = token._id?.toString();
                session.user.eid = token.eid;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.role = token.role;
            }
            return session
        }
    },
    pages:{
        signIn : '/login',
    }
}