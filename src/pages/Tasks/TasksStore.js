import {action, makeObservable, observable} from "mobx";
import Network from "../../services/Network";

class TasksStore {
    constructor() {
        makeObservable(this)
    }


    @observable addInput = '';
    @observable tasks = [];
    @observable loader = false;

    @action setAddInput = event => {
        this.addInput = event.target.value;
    };

    @action checkTodo  = async (todo) => {
        try {
            let body = {
                done: todo.done = !todo.done,
                id: todo.id
            };
            await Network(`tasks/${todo.id}`, 'PATCH', body)
        } catch (e) {
            console.log(e)
        }
    }

    @action
    deleteTodo = async (todo) => {
        try {
            let body = {
                count: todo.id
            };
          const response =  await Network(`tasks/${todo.id}`, 'DELETE', body)
            this.tasks = this.tasks.filter((task)=>task.id !== todo.id)
            console.log(response)
        } catch (e) {
            console.log(e)
        }

    }

    @action
    sendTodo = async () => {
        try {
            let body = {
                title: 'something',
                body: this.addInput,
                done: false
            };
          const response =   await Network(`tasks`, 'POST', body)
            this.tasks = [...this.tasks, response]
            this.addInput = '';
        } catch (e) {
            console.log(e)
        }

    };


    @action loadTasks = () => {
        this.loader = true;
        Network(`tasks`)
            .then(data=>(this.tasks = data))
            .catch(error=>{
                console.log(error)
            })
            .finally(() => {
                this.loader = false
            })
    }
}
const tasksStore = new TasksStore();
export default tasksStore;


