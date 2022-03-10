import React from 'react';
import PlayIcon from '@material-ui/icons/PlayCircleFilled';
import NextIcon from '@material-ui/icons/SkipNext';
import PrevIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import LyricsIcon from '@material-ui/icons/ChromeReaderMode';
import QueueIcon from '@material-ui/icons/Queue';
import ConnectIcon from '@material-ui/icons/CastConnected';
import VolumeIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core'

function Footer() {
  return (
    <div className='fixed bottom-0 w-full h-16 bg-spotify-dark-footer-bg p-5 flex justify-between text-white'>
      <div className='flex-1 flex items-center'>
        <img src="https://i.scdn.co/image/ab67616d00004851c27db9f494994c257bb302ef" className='h-12' />
        <div className='flex flex-col py-2 px-4'>
        <h1 className='text-sm'>AAAAAA</h1>
        <p className='text-xs text-[#6a6a6a]'>aaaaaaaaaaaaaaaaaaaaa</p>
        </div>
      </div>
      <div className='px-24 flex items-center justify-between max-w-sm flex-1'>
        <ShuffleIcon />
        <PrevIcon />
        <PlayIcon fontSize="large" />
        <NextIcon />
        <RepeatIcon />
      </div>
      <div className='flex flex-1 items-center'>
        <Grid container spacing={2} justifyContent={'flex-end'}>
          <Grid item>
            <LyricsIcon />
          </Grid>
          <Grid item>
            <QueueIcon />
          </Grid>
          <Grid item>
            <VolumeIcon />
          </Grid>
          <Grid item xs={4}>
            <Slider aria-label="Volume" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer