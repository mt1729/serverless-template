import fetch from 'node-fetch';
import seed from './seed.json';
import { OK, NOT_FOUND } from '../../util/statusCodes';

const endpoint = process.env.ENDPOINT;

test('User exists', async () => {
    const res = await fetch(`${endpoint}/users/${seed[0].id}`);
    const json = await res.json()

    expect(res.status).toBe(OK);
    expect(json.id).toBe(seed[0].id);
});

test('User does not exist', async () => {
    const res = await fetch(`${endpoint}/locations/matt-is-cool`);
    expect(res.status).toBe(NOT_FOUND); // :(
})