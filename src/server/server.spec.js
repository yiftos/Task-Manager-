import { addNewTask, updateTask } from "./server"

(async function my(){
    await addNewTask({
        name: "yiftah",
        id: "203110"
    })

    await updateTask({
        name: "yiftah sachs",
        id: "203110"
    })
})()

