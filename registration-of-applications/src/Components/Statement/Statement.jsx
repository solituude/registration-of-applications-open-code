import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import someData from '../../data/MOCK_DATA-2.json';

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
                    <tr>
                        <td>1</td>
                        <td>Ростов-на-Дону, ул. Ленина, 36</td>
                        <td>прорыв</td>
                        <td>незамедлительно</td>
                        <td>Иванов Иван</td>
                        <td>+7(987)-673-9876</td>
                        <td>delete</td>
                    </tr>

                    {data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.address}</td>
                            <td>{item.type}</td>
                            <td>{item.priority}</td>
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