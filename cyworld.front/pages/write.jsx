import { Button, Form, Input, message } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";
import Router from "next/router";

const WriteTextArea = styled(Input.TextArea)`
  resize: none;
`;

const finishAction = async (value) => {
  const sendData = {
    _title: value.title,
    _content: value.content,
    _author: value.author,
  };
  const response = await axios.post(
    "http://localhost:4000/api/cyworld/write",
    sendData
  );
  if (response.data.result) {
    Router.push("/");
    message.success("게시글 등록이 완료됐습니다.");
  } else {
    message.error("게시글 등록이 실패했습니다.");
  }
};

const Write = () => {
  const writeFormRef = useRef();
  return (
    <>
      <h1>글쓰기</h1>
      <Form
        ref={writeFormRef}
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 21 }}
        onFinish={finishAction}
      >
        <Form.Item label="제목" name="title" rules={[{ reqired: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="작성자" name="author" rules={[{ reqired: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="글" name="content" rules={[{ reqired: true }]}>
          <WriteTextArea rows={10} />
        </Form.Item>
        <Link href="/">
          <a>
            <Button>목록으로</Button>
          </a>
        </Link>
        <Button htmlType="submit">등록</Button>
      </Form>
    </>
  );
};

export default Write;
