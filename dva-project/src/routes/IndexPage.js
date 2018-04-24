import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button, ButtonToolbar } from 'react-bootstrap';

const buttonsInstance = (
  <ButtonToolbar>
    {/* 标准按钮 */}
    <Button>Default</Button>

    {/* 提供重要视觉感知及标识重要操作的按钮 */}
    <Button bsStyle="primary">Primary</Button>

    {/* 指示成功或正面操作按钮 */}
    <Button bsStyle="success">Success</Button>

    {/* 提供上下文帮助的提示信息按钮 */}
    <Button bsStyle="info">Info</Button>

    {/* 提醒操作需要小心使用 */}
    <Button bsStyle="warning">Warning</Button>

    {/* 提醒操作可能会导致危险或造成负面影响 */}
    <Button bsStyle="danger">Danger</Button>

    {/* 像一个链接但有按钮的操作行为 */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        {buttonsInstance}
        <Button>Default</Button>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
