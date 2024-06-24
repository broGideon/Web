import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTelegram, FaVk, FaGithub, FaGitlab } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-light text-dark mt-5 p-4">
            <Container>
                <Row>
                    <Col md="4">
                        <h5>Информация о нас</h5>
                        <p>
                            Мы - компания, стремящаяся предоставлять нашим клиентам лучшие продукты и услуги.
                            Наша цель - превзойти ожидания клиентов с помощью наших инновационных решений.
                        </p>
                    </Col>
                    <Col md="4">
                        <h5>Контакты</h5>
                        <ul className="list-unstyled">
                            <li>Email: ananasovii.yashik@gmail.com</li>
                            <li>Phone: +7(909)224-30-07</li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h5>Подпишитесь на нас</h5>
                        <ul className="list-unstyled d-flex">
                            <li>
                                <a href="https://vk.com/shuraa77" className="text-dark">
                                    <FaVk size="1.5em" />
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="https://t.me/ameba84" className="text-dark">
                                    <FaTelegram size="1.5em" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/broGideon" className="text-dark">
                                    <FaGithub size="1.5em" />
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="https://gitlab.com/broGideon" className="text-dark">
                                    <FaGitlab size="1.5em" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        &copy; {new Date().getFullYear()} broGideon. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;