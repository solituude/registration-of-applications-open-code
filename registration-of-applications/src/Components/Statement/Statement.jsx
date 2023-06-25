import React, {useEffect, useState} from "react";
import {Container, Table} from "react-bootstrap";
import {Tag} from 'antd';
import s from './statement.module.sass';
import {useLocation, useNavigate} from 'react-router';
import {Spin} from 'antd';
import StatementEdit from "../StatementEdit/StatementEdit";
import {useDispatch, useSelector} from "react-redux";
import {fetchSliceData} from "../../store/reducers/logReducer";
import TablePagination from "./Pagination";


const Statement = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(store => store.logPage.currentPage);
    const currData = useSelector(store => store.logPage.currentData);

    useEffect(() => {
        dispatch(fetchSliceData(currentPage))
        // console.log(currentPage);
    }, [currentPage, dispatch]);

    // const dataTable = useSelector(store => store.logPage.tableData);
    const isLoading = useSelector(store => store.logPage.isFetching);

    const setColorTag = (priority) => {
        // eslint-disable-next-line default-case
        switch (priority) {
            case "Незамедлительно":
                return "red";
            case "Высокий":
                return "volcano";
            case "Средний":
                return "gold";
            case "Низкий":
                return "blue";
        }
    }

    const PATH_STATEMENT_EDIT= "/statement/edit/";

    const headerTable = [
        {name: "Номер заявки"},
        {name: "Адрес"},
        {name: "Тип аварии"},
        {name: "Приоритет"},
        {name: "Заявитель"},
        {name: "Номер телефона"},
        {name: "Действия"},
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation().pathname;
    const navigate = useNavigate();

    const[dataEdit, setDataEdit] = useState({});

    const handleRowClick = (id, item) => {
        setIsModalOpen(true);
        navigate(`/statement/edit/${id}`);
        setDataEdit(item);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/statement');
        setDataEdit({});
    }

    return (
        <Container>
            {isLoading ? (<Spin className={s.loader}/>) : (
                <>
                    <h1 className={s.title}>Заявки</h1>
                    <Table className={s.table__content} hover>
                        <thead>
                        {headerTable.map(item => (
                            <th className={s.table__header}>{item.name}</th>
                        ))}
                        </thead>

                        <tbody>
                        {currData.map((item, index) => (
                            <tr key={item.id} onClick={() => handleRowClick(item.id, item)}>
                                <td className={s.table__item}>{item.id}</td>
                                <td className={s.table__item}>{item.address}</td>
                                <td className={s.table__item}>{item.accident}</td>
                                <td className={s.table__item}><Tag
                                    color={setColorTag(item.priority)}>{item.priority}</Tag></td>
                                <td className={s.table__item}>{item.name}</td>
                                <td className={s.table__item}>{item.phone}</td>
                                <td className={s.table__item}>delete</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    {location.includes(PATH_STATEMENT_EDIT) && <StatementEdit isOpen={isModalOpen}
                                                                              onClose={handleCloseModal}
                                                                              data={dataEdit}/>}
                    <TablePagination/>
                </>
            )}

        </Container>
    );
}

export default Statement;