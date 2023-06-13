import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import someData from '../../data/MOCK_DATA-3.json';
import { Tag } from 'antd';
import s from './statement.module.sass';
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../store/reducers/logReducer";
import { useNavigate } from 'react-router';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import {NavLink} from "react-router-dom";
import StatementEdit from "../StatementEdit/StatementEdit";

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

const Statement = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const count = useSelector(state => state.logPage.count); // эту переменную можно использовать

    useEffect(() => {
        setData(someData);
        setIsLoading(false);
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

    const onCount = () => {
        dispatch(setCount(5));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRowClick = (id) => {
        setIsModalOpen(true);
    };


    return(
        <Container>
            {isLoading ? (<Spin/>) : (
            <Table className={s.table__content} hover>
                <thead>
                {headerTable.map(item => (
                    <th className={s.table__header}>{item.name}</th>
                ))}
                </thead>

                <tbody>
                    {data.map((item, index) => (
                            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
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
            </Table>)}
            {isModalOpen && <StatementEdit onClose={() => setIsModalOpen(false)} />}
        </Container>
    );
}

export default Statement;