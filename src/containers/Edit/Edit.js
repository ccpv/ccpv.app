import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

import { Header } from 'containers'

import './Edit.css'
import Contents from './Contents'

import axios from 'axios'
import { url } from 'constants/url'

export class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      data: [
        {
          id: 1,
          username: 'taro',
          date: '2017/1/1',
          text: 'I am Taro',
          dangerFlg: true
        },
        {
          id: 2,
          username: 'jiro',
          date: '2017/3/1',
          text: 'I am jiro',
          dangerFlg: true
        },
        {
          id: 3,
          username: 'たろう',
          date: '2017/3/1',
          text: 'たろうです',
          dangerFlg: true
        },
        {
          id: 4,
          username: 'じろう',
          date: '2017/3/1',
          text: 'じろうです',
          dangerFlg: true
        }
      ]
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  componentWillMount() {
    let id = window.location.search.substring(1).split('&')
    id = id[0].split('=')[1]
    axios.get(url + '/edit?id=' + id).then(response => {
      this.setState({ data: response.data })
    })
  }

  cancel() {
    console.log('Cancel')
    window.location.href = '/'
  }

  save() {
    console.log('Save')
    //更新後のツイート情報を保存
  }

  render() {
    var contents = this.state.data.map((data, index) => {
      return (
        <Contents
          username={data.username}
          date={data.date}
          text={data.text}
          key={index}
        />
      )
    })
    return (
      <div className="Edit">
        <Header menuToggle={this.props.menuToggle} title="Edit">
          <Button color="inherit" onClick={() => this.cancel()}>
            CANCEL
          </Button>
          <Button
            color="inherit"
            onClick={(() => this.save(), this.handleClickOpen)}
          >
            SAVE
          </Button>
        </Header>
        {contents}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">編集しました</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              戻る
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
