import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import someData from '../../data/MOCK_DATA-3.json';
import { Tag } from 'antd';

const Statement = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(someData);
    }, [])

    return(
        <Container>
            <Table>
                <thead>
                    <th>Номер заявки</th>
                    <th>Адрес</th>
                    <th>Тип аварии</th>
                    <th>Приоритет</th>
                    <th>Заявитель</th>
                    <th>Номер телефона</th>
                    <th>Действия</th>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.address}</td>
                            <td>{item.accident}</td>
                            <td>{
                                item.priority === "Незамедлительно" ? <Tag color="red"> Незамедлительно</Tag> :
                                    item.priority === "Высокий" ? <Tag color="volcano">Высокий</Tag> :
                                        item.priority === "Средний" ? <Tag color="gold">Средний</Tag> :
                                            <Tag color="green">Низкий</Tag>}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>delete</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Statement;