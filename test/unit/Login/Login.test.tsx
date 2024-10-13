import { describe, expect, jest, it } from '@jest/globals';

import { login } from "../../../src/app/services/Login"
/**
 * @jest-environment jsdom
 */
describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a)!')
    })
})