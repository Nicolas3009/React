let correcto = true

export const obtengoData = (time, task) => {
    return new Promise ((resolve, reject)=> {
        setTimeout(() => {
            if(correcto){
                resolve(task)
            }else{
                reject('Error')
            }
        }, time);
    })
}