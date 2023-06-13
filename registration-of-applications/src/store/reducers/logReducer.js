import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        "id":1,
        "address":"02877 Cardinal Court",
        "accident":"Прорыв",
        "priority":"Незамедлительно",
        "name":"Vinogradov",
        "phone":"+62 (270) 685-6603"},

    {"id":2,"address":"07829 Elgar Center","accident":"Некачественная вода","priority":"Средний","name":"Popov","phone":"+44 (979) 351-5609"},
    {"id":3,"address":"7 Mallory Road","accident":"Утечка","priority":"Незамедлительно","name":"Vasiliev","phone":"+86 (390) 483-4259"},
    {"id":4,"address":"5 Sauthoff Road","accident":"Прорыв","priority":"Средний","name":"Kuznetsov","phone":"+1 (914) 268-1636"},
    {"id":5,"address":"094 Longview Junction","accident":"Закупорка","priority":"Незамедлительно","name":"Volkov","phone":"+86 (177) 625-4891"},
    {"id":6,"address":"21563 Hansons Alley","accident":"Закупорка","priority":"Средний","name":"Vasiliev","phone":"+54 (639) 473-9173"},
    {"id":7,"address":"41280 Summerview Point","accident":"Некачественная вода","priority":"Средний","name":"Novikov","phone":"+387 (705) 519-3471"},
    {"id":8,"address":"1015 Dixon Court","accident":"Прорыв","priority":"Незамедлительно","name":"Vasiliev","phone":"+62 (383) 250-0251"},
    {"id":9,"address":"6 Boyd Center","accident":"Некачественная вода","priority":"Средний","name":"Kuznetsov","phone":"+62 (605) 725-0468"},
    {"id":10,"address":"53 Sauthoff Trail","accident":"Прорыв","priority":"Высокий","name":"Bogdanov","phone":"+86 (791) 834-6506"},
];

const logReducer = createSlice({
    name: 'logPage',
    initialState,
    reducers: {
        setCount(state, action) {
            return{
                ...state,
                count: action.payload,
            }
        },
    }
})

export const { setCount } = logReducer.actions

export default logReducer.reducer