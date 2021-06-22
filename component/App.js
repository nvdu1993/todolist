import html from '../core.js'
import { connect } from '../store.js'
import Header from '../component/Header.js'
import Footer from '../component/Footer.js'
import Todolist from '../component/Todolist.js'



function App({ todos }) {
    return html`
    <section class="todoapp">
        ${Header()}
        ${todos.length > 0 && Todolist()}
        ${todos.length > 0 && Footer()}
    </section >
    `
}
export default connect()(App)