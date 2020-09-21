export async function saveCustomerInformationService() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve();
        }, 0);

        //imitation of error
        // return reject(new Error('something went wrong'));
    })
}