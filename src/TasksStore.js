// import {action, makeObservable, observable} from "mobx";
// import Network from "./services/Network";
//
// class TasksStore {
//     constructor() {
//         makeObservable(this)
//     }
//
//     @observable tasks = [];
//     @observable loader = false;
//
//     @action loadTasks = () => {
//         this.loader = true;
//         Network('tasks?access_token=qkOBsxOWT5BsJ1QaTXqrQjPfFneR3r71mWj4IV1IWDNcyzGCbEu4m9E8DwBm78tM')
//             .then(data=>(this.tasks = data))
//             .catch(error=>{
//                 console.log(error)
//             })
//             .finally(() => {
//                 this.loader = false
//             })
//     }
// }
// const tasksStore = new TasksStore();
// export default tasksStore;
