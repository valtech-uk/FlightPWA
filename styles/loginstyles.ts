export const _styles = `
.passage-auth {
    --passage-container-border-radius-default: 2rem;
    font-family: 'tondo';
    max-width: none;
} 
* {
    font-size: 1rem;
    font-family: 'tondo' !important;
}
.title,
.passage-branding {
    display: none;
}
.identifier-form.identifier-form {
    margin-top: 2rem;
}
input.input.input {
    padding: 1rem;
    border-radius: 0.5rem;
    border: solid 1px #d4d4d4;
    font-size: 0.875rem;
    width: 100%;
    color: #000;
    background-color: #f1f1f1;
}
.passage-auth button.button.button, 
.passage-profile button.button.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0;
    border: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    min-width: 64px;
    padding: 0 1rem;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #fff;
    background-color: #f60;
    border-radius: 100px;
    margin: 1rem auto;
    height: 2.5rem;
}
.passage-auth button.button.button::after, 
.passage-profile button.button.button::after {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    transform: translate(3px, 1px);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M8.6,17.7c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0.1-0.4,0.3-0.6l4.8-4.6L8.6,7.4C8.5,7.2,8.4,7,8.4,6.8c0-0.2,0.1-0.4,0.3-0.6C8.8,6.1,9,6,9.2,6s0.4,0.1,0.6,0.2l5.6,5.3c0.1,0.1,0.1,0.2,0.2,0.2c0,0.1,0.1,0.2,0.1,0.2c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.2-0.2,0.2l-5.6,5.3C9.7,17.9,9.5,18,9.2,18C9,18,8.8,17.9,8.6,17.7z' fill='%23ffffff'/%3E%3C/svg%3E");
}
.link.has-text-centered a.body-link {
    display: inline-flex;
    align-items: flex-end;
    background-color: #fff;
    position: absolute;
    top: 0;
    width: calc(50% - 1rem);
    height: 2.6rem;
    opacity: 1; 
    font-size: 1.125rem;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 2.3;
}
.link.has-text-centered a.body-link[data-test="register-link"] {
    left: calc(50% + 1rem);
    color: #fff;
}
.link.has-text-centered a.body-link[data-test="register-link"]::after {
    content: 'Register';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    text-align: left;
    color: #000;
}
.link.has-text-centered a.body-link[data-test="login-link"] {
    right: calc(50% + 1rem);
    justify-content: flex-end;
    color: #fff;
}
.link.has-text-centered a.body-link[data-test="login-link"]::after {
    content: 'Sign in';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    text-align: right;
    color: #000;
}
.link.has-text-centered > div {
    color: transparent;
}
.content.wrap-text {
    position: relative;
}
.content.wrap-text::after {
    content: '';
    display: block;
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 2.5rem;
    top: -1rem;
}
.image.has-text-centered {
    background-color: #fff;
    top: -22px;
    position: relative;
    width: 100%;
    margin: 0;
}
.passage-auth a[role=button],
.passage-profile a[role=button] {
    font-weight: 400 !important;
}
.grid-stack.register {
    height: 125px !important;
}
figure ~ .flex-row.flex-center button {
    margin: 0 .2rem !important;
    width: auto !important;
}
`;