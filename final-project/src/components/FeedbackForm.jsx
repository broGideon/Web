import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import {OverlayTrigger, Popover, Button, Form} from 'react-bootstrap';

const FeedbackForm  = () => {
    const {
        register,
        handleSubmit,
        formState: { statusForm },
    } = useForm();
    const [status, setStatus] = useState("");

    const onSubmit = (data, e) => {
        emailjs
            .send("service_6vg1efk", "template_tnlpsks", data, "9eAIRQAdFCT2pZZ-6")
            .then((response) => {
                setStatus("Сообщение отправлено успешно!");
                e.target.reset();
            })
            .catch((error) => {
                setStatus("Ошибка отправки сообщения. Попробуйте позже.");
            });
    };

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Форма обратной связи</Popover.Header>
            <Popover.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Имя:</label>
                        <Form.Control
                            placeholder="Иван"
                            {...register("name", { required: "Это поле является обязательным" })}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Form.Control
                            placeholder="example@mail.com"
                            {...register("email", {
                                required: "Это поле является обязательным",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Некорректный формат почты",
                                },
                            })}
                        />
                    </div>
                    <div>
                        <label>Сообщение:</label>
                        <Form.Control
                            as="textarea"
                            aria-label="With textarea"
                            {...register("message", { required: "Это поле является обязательным" })}
                        />
                    </div>
                    <Button className="mt-1" variant="primary" type="submit">Отправить</Button>
                </form>
                {status && <p>{status}</p>}
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <div className="popup">
                <div className="popup-content">
                    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                        <Button variant="info">Обратная связь</Button>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    );
};

export default FeedbackForm ;