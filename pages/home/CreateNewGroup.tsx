"use client";

import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

export const CreateNewGroup = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      // TODO: call API create voice room with DTO values
      console.log("CreateVoiceRoomDto payload:", values);
      setOpen(false);
      form.resetFields();
    } catch {
      // validation error -> giữ modal mở
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Create a new group
      </Button>
      <Modal
        title="Create a new group"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Create"
        cancelText="Cancel"
        destroyOnClose
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Please enter group name" },
              { max: 255, message: "Max length is 255 characters" },
            ]}
          >
            <Input placeholder="Group name" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              { max: 255, message: "Max length is 255 characters" },
            ]}
          >
            <Input.TextArea
              rows={3}
              placeholder="Description (optional)"
              showCount
              maxLength={255}
            />
          </Form.Item>

          <Form.Item
            label="Language"
            name="language"
            rules={[
              { max: 32, message: "Max length is 32 characters" },
            ]}
          >
            <Input placeholder="Language code (optional, e.g. en, vi)" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};