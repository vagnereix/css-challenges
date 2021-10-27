import Head from 'next/head'
import React from 'react'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import { BorderAnimation } from '../components/BorderAnimation'
import { Coffee } from '../components/Coffee'
import { Diamond } from '../components/Diamond'
import { EnvelopHeart } from '../components/EnvelopHeart'
import { GitLogo } from '../components/GitLogo'
import { LockUp } from '../components/LockUp'
import { Mountains } from '../components/Mountains'
import { Switches } from '../components/Switches'
import { TextAnimation3D } from '../components/TextAnimation3D'
import { Windmill } from '../components/Windmill'

export default function Home() {
  const challenges = [
    Coffee,
    BorderAnimation,
    TextAnimation3D,
    Mountains,
    GitLogo,
    EnvelopHeart,
    Diamond,
    Windmill,
    LockUp,
    Switches,
  ]

  return (
    <>
      <Head>
          <title>CSS Battle | Challenges</title>
      </Head>

      {challenges.map(challenge => {
        return (
          <section key={challenge.toString()} className='challenge'>
            {React.createElement(challenge)}
          </section>
        )
      })}
    </>
  )
}
