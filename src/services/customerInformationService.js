export async function saveCustomerInformationService() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve('Customer information successfully saved');
        }, 0);

        //imitation of error
        // return reject(new Error('something went wrong'));
    })
}