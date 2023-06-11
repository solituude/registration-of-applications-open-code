import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import someData from '../../data/MOCK_DATA-3.json';
import { Tag } from 'antd';
import s from './statement.module.sass';

const Statement = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(someData);
    }, [])

    const setColorTag = (priority) => {
        // eslint-disable-next-line default-case
        switch (priority) {
            case "Незамедлительно": return "red";
            case "Высокий": return "volcano";
            case "Средний": return "gold";
            case "Низкий": return "blue";
        }
    }

    const headerTable = [
        { name: "Номер заявки"},
        { name: "Адрес"},
        { name: "Тип аварии"},
        { name: "Приоритет"},
        { name: "Заявитель"},
        { name: "Номер телефона"},
        { name: "Действия"},
    ]


    return(
        <Container>
            <Table className={s.table__content}>
                <thead>
                {headerTable.map(item => (
                    <th className={s.table__header}>{item.name}</th>
                ))}
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td  className={s.table__item}>{item.id}</td>
                            <td className={s.table__item}>{item.address}</td>
                            <td className={s.table__item}>{item.accident}</td>
                            <td className={s.table__item}><Tag color={setColorTag(item.priority)}>{item.priority}</Tag></td>
                            <td className={s.table__item}>{item.name}</td>
                            <td className={s.table__item}>{item.phone}</td>
                            <td className={s.table__item}>delete</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Statement;