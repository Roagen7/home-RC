export default function createHtmlTemplates(): any {
  return {
    messageForm: ` <form action="/message" method="POST">
        <label for="message">message: <input id="message" name="message" type="text"> </input> </label>
        <label for="sender"><input type="submit"></input></label>
        </form>`,
    registerForm: ` <form action="/account/register" method="POST">
    <label for="user">username: <input id="user" name="user" type="text"> </input> </label><br>
    <label for="message">password: <input id="passwd" name="passwd" type="password"> </input> </label><br>
    <label for="sender"><input type="submit"></input></label>
    </form>`,
    loginForm: ` <form action="/account/login" method="POST">
    <label for="user">username: <input id="user" name="user" type="text"> </input> </label><br>
    <label for="message">password: <input id="passwd" name="passwd" type="password"> </input> </label><br>
    <label for="sender"><input type="submit"></input></label>
    </form>`,
    accountButtons: `<button onclick="location.href+='/register'">register</button>
    <button onclick="location.href+='/login'">login</button>`
  };
}
