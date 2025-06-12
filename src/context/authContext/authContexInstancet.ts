import {createContext} from 'react';
import type {AuthContext} from '../../core/interfaces/auth/interfaces.ts';

export const AuthContextInstance = createContext<AuthContext | null>(null);
