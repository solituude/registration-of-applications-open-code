import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Spin} from 'antd';
import {fetchCurrentApplication} from "../../store/reducers/logReducer";
import s from "../Statement/statement.module.sass";

const StatementEdit = (props) => {
    const [address, setAddress] = useState("");
    const [accident, setAccident] = useState("");
    const [priorityApp, setPriorityApp] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const typesAccident = [
        {type: "Прорыв"},
        {type: "Утечка"},
        {type: "Колонка уличная"},
        {type: "Некачественная вода"},
        {type: "Закупорка"},
        {type: "Другое"},
    ];

    const priorities = [
        {priority: "Незамедлительно"},
        {priority: "Высокий"},
        {priority: "Средний"},
        {priority: "Низкий"},
    ];

    const {id} = useParams();
    console.log(id);
    const dispatch = useDispatch();

    const currApplication = useSelector(store => store.logPage.currentApplication);

    let setStates;
    setStates = () => {
        setAddress(currApplication.address);
        setAccident(currApplication.accident);
        setPriorityApp(currApplication.priority);
        setName(currApplication.name);
        setPhone(currApplication.phone);
    };

    useEffect(() => {
        dispatch(fetchCurrentApplication(id));
        setStates();
    }, [dispatch, id, setStates]);

    return (
        <>
            {currApplication ? (

                <Modal
                    title={`Редактирование заявки №${id}`}
                    centered
                    open={true}
                    onOk={props.onClose}
                    onCancel={props.onClose}
                    width={800}
                    footer={[]}>

                    <Form labelCol={{span: 4,}} wrapperCol={{span: 14,}}>
                        <Form.Item label="Адрес"
                                   rules={[
                                       {
                                           required: true,
                                           message: 'Пожалуйста, введите адрес аварии',
                                       },
                                   ]}>
                            <Input value={address} onChange={(e) => {
                                setAddress(e.target.value)
                                console.log(e.target.value)
                            }}/>
                        </Form.Item>

                        <Form.Item label="Тип аварии" rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, выберите тип аварии',
                            }]}>

                            <Select value={accident} onChange={(e) => {
                                setAccident(e);
                            }}>
                                {
                                    typesAccident.map((item) => (
                                        <Select.Option value={item.type}>{item.type}</Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item label="Приоритет" rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, выберите приоритет аварии',
                            },
                        ]}>
                            <Select value={priorityApp} onChange={(e) => setPriorityApp(e)}>
                                {
                                    priorities.map((item) => (
                                        <Select.Option value={item.priority}>{item.priority}</Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item label="Заявитель" rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите имя заявителя',
                            },
                        ]}>
                            <Input value={name} onChange={(e) => setName(e.target.value)}/>
                        </Form.Item>

                        <Form.Item label="Номер телефона" rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите номер телефона заявителя',
                            },
                        ]}>
                            <Input value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </Form.Item>

                        <Form.Item wrapperCol={{offset: 8, span: 16}}>
                            <Button type="primary" htmlType="submit">
                                Сохранить изменения
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>) : (<Spin className={s.loader}/>)}
        </>
    );
}

export default StatementEdit;