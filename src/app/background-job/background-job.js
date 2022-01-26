const schedule = require('node-schedule')
const BlackListToken = require('../../app/models/blacklist-token')
const rule = new schedule.RecurrenceRule()
rule.hour = 0
rule.minute = 0
rule.second = 0

const deleteExpiredToken = schedule.scheduleJob(rule, async function(){
    const EXPIRESIN = 2
    await BlackListToken.find({})
        .then(data => {
            var newData = []

            data.map(item => {
                var now = Date.now()
                var date = item.deleteAt
                var dateNow = new Date(now)
                var dateDelete = new Date(date)
                var milliseconds = dateNow.getTime() - dateDelete.getTime()
                var Difference_In_Days = milliseconds / (1000 * 3600 * 24)

                if(Difference_In_Days > EXPIRESIN){
                    newData.push(item._id)
                }
            })

            BlackListToken.deleteMany({
                _id: {
                    $in : newData
                }
            })
            .then(data => console.log(data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

})

module.exports = deleteExpiredToken