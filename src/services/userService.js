export async function saveUserService() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve('İstifadəçi yadda saxlanıldı');
        }, 0);

        //imitation of error
        // return reject(new Error('something went wrong'));
    })
}