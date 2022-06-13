import { users } from '../fixture.js';

export class App {
    init() {
        console.log(data.users);
    }
    run() {
        const html = `
        <label for="USER-select">Choisisser un Utilisateur:</label>
        <select name="users" id="user-select">
        ${users.map(u => `
            <option value="">Please choose a user</option>
            <option value="${u.username}">${u.prenom}</option>
        </select>`).join('')}
        `;

    document
      .querySelector('.users')
      .innerHTML = html;
  }
}