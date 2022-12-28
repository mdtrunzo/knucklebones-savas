import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { CREATE_GAME } from '../api/Queries'
import { v4 as uuidv4 } from 'uuid'
import useHooks from '../controllers'

function Homepage() {
  const [id, setId] = useState('')
  const navigate = useNavigate()
  const [handleMutation, { data }] = useMutation(CREATE_GAME)
  const ref = useRef(null)
  const { useSession } = useHooks()
  const { uid } = useSession()

  useEffect(() => {
    document.querySelector('body').classList.remove('game')
    document.querySelector('body').classList.add('homepage')
  }, [])

  useEffect(() => {
    setId(uuidv4())
    if (data) {
      navigate(`/game/${data?.insert_game.returning[0].id}`)
    }
  }, [data, navigate])

  //Animation
  useEffect(() => {
    const cells = { wide: 28, tall: 24 }
    const wave = 6000
    const interval = 5000
    const delay = wave / (cells.wide * cells.tall)
    const tiles = document.querySelectorAll('.homepage .p-tile')

    const roll = () => {
      tiles.forEach((tile, i) => {
        setTimeout(() => {
          let rotate = tile.querySelector('.homepage .p-rotate')
          if (rotate === null) {
            return
          } else {
            let currentRotation = parseInt(rotate.style.getPropertyValue('--r'))
            let deltaRotation = Math.floor(Math.random() * 2) * 2 - 1
            rotate.style.setProperty('--r', currentRotation + deltaRotation)
          }
        }, delay * i)
      })
    }

    const animateHomepagePattern = () => {
      if (!window.matchMedia('(prefers-reduced-motion)').matches) {
        roll()
        setInterval(() => {
          roll()
        }, wave + interval)
      }
    }

    animateHomepagePattern()
  }, [])

  useEffect(() => {
    if ('#instructions' === window.location.hash) {
      const instructions = ref.current
      instructions.scrollIntoView({ behavior: 'smooth', block: 'center' })
      instructions.classList.add('highlighted')
    }
  }, [])

  return (
    <main>
      <div>
        <header className="homepage-header">
          <h1>Knucklebones</h1>
          <p>
            A 2-player game <br /> of luck and strategy
          </p>
        </header>

        <p
          className="homepage-create-game-link"
          onClick={() => handleMutation({ variables: { id, uid } })}
        >
          Create New Game
        </p>

        <article className="homepage-article">
          <h2 className="sr-only">About</h2>
          <p>
            Knucklebones is a 2-player game where each player tries to maximize
            their score by creating die combinations and knocking their
            opponent’s dice off the board.
          </p>
          <section>
            <h3>Starting a New Game</h3>
            <p>
              When you create a new game, a unique game link will be generated.
              Share this link with a friend! The game will start once they’ve
              joined.
            </p>
          </section>
          <section id="instructions" ref={ref}>
            <h3>How to Play</h3>
            <p>
              Players take turns rolling a single d6 and deciding where to place
              it on their board.
            </p>
            <p>
              Score is determined by the sum of all of each player’s dice.
              Placing two dice of the same value in a lane will double the sum
              of those dice (e.g. 2 sixes in one lane gives 24 points, not 12).
              Three dice of the same value in a lane will triple the sum of
              those dice.
            </p>
            <p>
              Placing a die in your lane destroys all the opponents' dice of the
              same value on their side of that same lane.
            </p>
            <p>
              The game is over as soon as all nine slots on one player’s side of
              the board are filled.
            </p>
          </section>
          <section>
            <h3>Origins of Knucklebones</h3>
            <p>
              The mechanics of this game were created by Massive Monster as a
              minigame within their game Cult of the Lamb, which is distributed
              by Devolver Digital. Cult of the Lamb has won several awards and
              is available on macOS, Nintendo Switch, PlayStation 4, PlayStation
              5, Windows, Xbox One, and Xbox Series X/S.
            </p>
            <p>
              Visit the{' '}
              <a rel="external" href="https://www.cultofthelamb.com/">
                Cult of the Lamb official website
              </a>
              .
            </p>
          </section>
          <section>
            <h3>Knucklebones on the Web</h3>
            <p>
              This online version of knucklebones is a Labs™ project created by{' '}
              <a href="https://www.savaslabs.com/?utm_source=knucklebones&utm_medium=website&utm_id=labs+project">
                Savas Labs
              </a>
              , a firm that designs and builds products, apps, APIs and websites
              that create meaningful impact.{' '}
              <a href="https://www.savaslabs.com/labs/?utm_source=knucklebones&utm_medium=website&utm_id=labs+project">
                Labs at Savas
              </a>{' '}
              is a space for experimentation with new technologies and designs.
            </p>
            <a
              className="labs-logo"
              href="https://www.savaslabs.com/labs/?utm_source=knucklebones&utm_medium=website&utm_id=labs+project"
            >
              <svg
                width="150"
                height="79"
                viewBox="0 0 150 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <path
                  d="M99.9617 20.6136V35.8728C99.9617 36.3334 99.6162 36.6789 99.1555 36.6789H94.1459C93.6853 36.6789 93.3398 36.3334 93.3398 35.8728V35.2394C91.7851 36.5062 89.7697 37.2547 87.524 37.2547C82.6296 37.2547 78.7716 33.7423 78.7716 29.1357C78.7716 24.4716 82.6296 20.9591 87.524 20.9591C89.597 20.9591 91.4396 21.5925 92.9367 22.6866V20.6136C92.9367 18.6559 91.6699 17.3891 89.7697 17.3891C88.3302 17.3891 87.2937 18.0225 86.8331 19.1165C86.7179 19.462 86.3724 19.6923 85.9693 19.6923H80.7294C80.096 19.6923 79.6354 19.1165 79.8081 18.4831C80.9597 14.3948 84.645 11.5733 89.8273 11.5733C95.7006 11.6309 99.9617 15.3161 99.9617 20.6136ZM92.9367 29.1933C92.9367 27.6386 91.382 26.3718 89.4242 26.3718C87.524 26.3718 85.9693 27.6386 85.9693 29.1933C85.9693 30.748 87.524 31.9572 89.4242 31.9572C91.4396 31.9572 92.9367 30.6904 92.9367 29.1933ZM132.323 29.2509H136.929C137.447 29.2509 137.966 29.5964 138.138 30.1146C138.484 31.0359 139.463 31.7269 140.557 31.7269C141.881 31.7269 142.975 30.9208 142.975 29.8267C142.975 28.272 141.075 27.581 139.06 27.1204C135.374 26.2566 131.344 24.414 131.344 19.3468C131.344 14.3372 135.605 11.6309 140.442 11.6309C145.106 11.6309 148.733 14.2797 149.482 17.8497C149.655 18.5983 149.079 19.3468 148.33 19.3468H143.551C143.09 19.3468 142.687 19.1165 142.515 18.6559C142.227 17.8497 141.42 17.2163 140.384 17.2163C139.232 17.2163 138.311 17.9649 138.311 18.8862C138.311 20.2681 139.981 21.0167 142.399 21.5925C146.085 22.5138 150 24.2413 150 29.1933C150 34.3181 145.739 37.2547 140.557 37.2547C135.662 37.2547 131.92 34.4332 131.171 30.6904C130.998 29.9994 131.574 29.2509 132.323 29.2509ZM77.8503 30.6328V35.7576C77.8503 36.2759 77.4473 36.6789 76.929 36.6789H60.9213C60.4031 36.6789 60 36.2759 60 35.7576V4.54835C60 4.03011 60.4031 3.62704 60.9213 3.62704H66.5067C67.025 3.62704 67.428 4.03011 67.428 4.54835V29.7115H76.929C77.4473 29.7115 77.8503 30.1146 77.8503 30.6328ZM129.904 24.4716C129.904 31.7845 124.895 37.2547 118.1 37.2547C115.106 37.2547 112.514 35.9879 110.729 33.9726V35.4697C110.729 36.1607 110.154 36.6789 109.52 36.6789H104.971C104.28 36.6789 103.762 36.1031 103.762 35.4697V3.39672C103.762 2.70574 104.338 2.1875 104.971 2.1875H109.52C110.211 2.1875 110.729 2.76332 110.729 3.39672V14.9706C112.572 12.8977 115.106 11.6885 118.1 11.6885C124.895 11.6309 129.904 17.1587 129.904 24.4716ZM122.706 24.4716C122.706 21.0167 120.173 18.4255 116.718 18.4255C113.263 18.4255 110.729 21.0167 110.729 24.4716C110.729 27.9265 113.263 30.5177 116.718 30.5177C120.173 30.5177 122.706 27.9265 122.706 24.4716Z"
                  fill="#000000"
                ></path>
                <path
                  d="M60 53.0326L62.9942 44.6833H64.4338L67.428 53.0326H66.1037L65.3551 50.8445H62.0729L61.3244 53.0326H60ZM64.952 49.7505L63.7428 46.1804H63.6852L62.476 49.7505H64.952ZM71.6315 46.7562H72.8407V47.7927H72.9559C73.1862 47.3896 73.5893 46.6987 74.7409 46.6987C76.238 46.6987 77.3897 47.9079 77.3897 49.9232C77.3897 51.9386 76.2956 53.1478 74.7409 53.1478C73.5893 53.1478 73.1286 52.4568 72.8983 52.0538H72.8407V55.3935H71.6315V46.7562V46.7562ZM74.453 52.1113C75.5471 52.1113 76.1229 51.1325 76.1229 49.8657C76.1229 48.5989 75.5471 47.6776 74.453 47.6776C73.359 47.6776 72.8407 48.5413 72.8407 49.8657C72.8407 51.19 73.4165 52.1113 74.453 52.1113ZM79.9233 53.0326H78.714V44.6833H79.9233V53.0326ZM81.3052 51.2476C81.3052 49.8081 82.5144 49.5202 83.7236 49.3474C84.8753 49.2323 85.3359 49.2323 85.3359 48.7716C85.3359 48.0806 84.9329 47.62 84.1267 47.62C83.3206 47.62 82.8599 48.023 82.6872 48.4837L81.5356 48.1958C81.9386 47.0442 82.9751 46.5835 84.1267 46.5835C85.1056 46.5835 86.5452 46.929 86.5452 48.7716V52.9175H85.3359V52.0538H85.2784C85.048 52.5144 84.4722 53.0326 83.4357 53.0326C82.2265 53.1478 81.3052 52.4568 81.3052 51.2476ZM85.2784 50.787V49.9808C85.1056 50.1536 84.1843 50.2687 83.7812 50.3263C83.0903 50.4415 82.5144 50.6718 82.5144 51.3052C82.5144 51.881 83.0327 52.2265 83.7236 52.2265C84.7025 52.1689 85.2784 51.4779 85.2784 50.787ZM87.8695 49.9232C87.8695 48.023 89.0212 46.6987 90.8062 46.6987C92.2457 46.6987 93.2822 47.5624 93.3974 48.8292H92.1882C92.073 48.2534 91.5548 47.7351 90.8062 47.7351C89.7697 47.7351 89.0787 48.5989 89.0787 49.9232C89.0787 51.3052 89.7697 52.1689 90.8062 52.1689C91.4972 52.1689 92.0154 51.7659 92.1882 51.0749H93.3974C93.2822 52.2841 92.3033 53.2054 90.8062 53.2054C88.9636 53.1478 87.8695 51.8234 87.8695 49.9232ZM94.4338 49.9232C94.4338 48.023 95.5855 46.6411 97.3129 46.6411C98.7525 46.6411 100.077 47.5048 100.077 49.8081V50.2687H95.6431C95.7006 51.4779 96.3916 52.1689 97.4281 52.1689C98.1191 52.1689 98.6373 51.881 98.8676 51.2476L100.019 51.4779C99.7314 52.5144 98.7525 53.1478 97.4281 53.1478C95.5279 53.1478 94.4338 51.881 94.4338 49.9232ZM98.8676 49.3474C98.8676 48.3685 98.2342 47.6776 97.3129 47.6776C96.334 47.6776 95.7006 48.4261 95.6431 49.3474H98.8676ZM107.505 47.7351H106.181V53.0326H104.971V47.7351H103.992V46.7562H104.971V46.0077C104.971 44.8561 105.835 44.2227 106.814 44.2227C107.332 44.2227 107.678 44.3378 107.85 44.3954L107.562 45.3743C107.447 45.3167 107.275 45.2591 106.987 45.2591C106.411 45.2591 106.181 45.547 106.181 46.1228V46.6987H107.505V47.7351ZM108.196 49.9232C108.196 47.9655 109.347 46.6987 111.133 46.6987C112.918 46.6987 114.069 47.9655 114.069 49.9232C114.069 51.881 112.918 53.1478 111.133 53.1478C109.347 53.1478 108.196 51.881 108.196 49.9232ZM112.86 49.9232C112.86 48.714 112.342 47.6776 111.19 47.6776C110.038 47.6776 109.52 48.714 109.52 49.9232C109.52 51.1325 110.038 52.1113 111.19 52.1113C112.284 52.1113 112.86 51.1325 112.86 49.9232ZM115.451 46.7562H116.66V47.7351H116.718C116.948 47.0442 117.582 46.6411 118.33 46.6411C118.503 46.6411 118.733 46.6411 118.848 46.6411V47.7927C118.733 47.7927 118.445 47.7351 118.215 47.7351C117.351 47.7351 116.718 48.311 116.718 49.1747V53.0326H115.509V46.7562H115.451ZM60.2303 61.4396C60.2303 59.5394 61.382 58.1574 63.1094 58.1574C64.549 58.1574 65.8733 59.0211 65.8733 61.3244V61.7851H61.4395C61.4971 62.9943 62.1881 63.6853 63.2246 63.6853C63.9156 63.6853 64.4338 63.3974 64.6641 62.764L65.8158 62.9943C65.5278 64.0307 64.549 64.6641 63.2246 64.6641C61.382 64.6641 60.2303 63.3973 60.2303 61.4396ZM64.7217 60.8638C64.7217 59.8849 64.0883 59.1939 63.167 59.1939C62.1881 59.1939 61.5547 59.9424 61.4971 60.8638H64.7217ZM69.501 60.691L70.8829 58.2726H72.2073L70.2495 61.382L72.2073 64.4914H70.8829L69.4434 62.1306L68.0614 64.4914H66.7371L68.6948 61.382L66.7946 58.2726H68.119L69.501 60.691ZM73.4741 58.2726H74.6833V59.3091H74.7985C75.0288 58.906 75.4319 58.215 76.5835 58.215C78.0806 58.215 79.2323 59.4242 79.2323 61.4396C79.2323 63.4549 78.1382 64.6641 76.5835 64.6641C75.4319 64.6641 74.9712 63.9732 74.7409 63.5701H74.6833V66.9098H73.4741V58.2726ZM76.2956 63.6277C77.3897 63.6277 77.9655 62.6488 77.9655 61.382C77.9655 60.1152 77.3897 59.1939 76.2956 59.1939C75.2016 59.1939 74.6833 60.0576 74.6833 61.382C74.6833 62.7064 75.2591 63.6277 76.2956 63.6277ZM80.3263 61.4396C80.3263 59.5394 81.478 58.1574 83.2054 58.1574C84.645 58.1574 85.9693 59.0211 85.9693 61.3244V61.7851H81.5356C81.5931 62.9943 82.2841 63.6853 83.3206 63.6853C84.0116 63.6853 84.5298 63.3974 84.7601 62.764L85.9118 62.9943C85.6238 64.0307 84.645 64.6641 83.3206 64.6641C81.4204 64.6641 80.3263 63.3973 80.3263 61.4396ZM84.7601 60.8638C84.7601 59.8849 84.1267 59.1939 83.2054 59.1939C82.2265 59.1939 81.5931 59.9424 81.5356 60.8638H84.7601ZM87.3513 58.2726H88.5605V59.2515H88.6181C88.8484 58.5605 89.4818 58.1574 90.2304 58.1574C90.4031 58.1574 90.6335 58.1574 90.7486 58.1574V59.3091C90.6335 59.3091 90.3455 59.2515 90.1152 59.2515C89.2515 59.2515 88.6181 59.8273 88.6181 60.691V64.549H87.4089V58.2726H87.3513ZM91.6123 56.5451C91.6123 56.1421 91.9578 55.7966 92.3609 55.7966C92.764 55.7966 93.1095 56.1421 93.1095 56.5451C93.1095 56.9482 92.764 57.2937 92.3609 57.2937C91.9578 57.2937 91.6123 56.9482 91.6123 56.5451ZM91.7851 58.2726H92.9943V64.549H91.7851V58.2726ZM94.6642 58.2726H95.8158V59.3091H95.8734C96.1613 58.6181 96.7371 58.215 97.6008 58.215C98.4646 58.215 99.0404 58.6181 99.2707 59.3091H99.3283C99.6162 58.6181 100.307 58.215 101.228 58.215C102.38 58.215 103.186 58.906 103.186 60.3455V64.549H101.919V60.4607C101.919 59.597 101.401 59.2515 100.768 59.2515C99.9617 59.2515 99.501 59.8273 99.501 60.5758V64.549H98.2918V60.4031C98.2918 59.7121 97.8312 59.2515 97.1402 59.2515C96.4492 59.2515 95.8734 59.8273 95.8734 60.691V64.549H94.6642V58.2726V58.2726ZM104.511 61.4396C104.511 59.5394 105.662 58.1574 107.39 58.1574C108.829 58.1574 110.154 59.0211 110.154 61.3244V61.7851H105.72C105.777 62.9943 106.468 63.6853 107.505 63.6853C108.196 63.6853 108.714 63.3974 108.944 62.764L110.096 62.9943C109.808 64.0307 108.829 64.6641 107.505 64.6641C105.662 64.6641 104.511 63.3973 104.511 61.4396ZM109.002 60.8638C109.002 59.8849 108.369 59.1939 107.447 59.1939C106.468 59.1939 105.835 59.9424 105.777 60.8638H109.002ZM112.802 64.549H111.593V58.2726H112.745V59.3091H112.802C113.09 58.6181 113.724 58.215 114.645 58.215C115.912 58.215 116.776 59.0211 116.776 60.5758V64.549H115.566V60.691C115.566 59.7697 115.048 59.2515 114.242 59.2515C113.378 59.2515 112.802 59.8273 112.802 60.8062V64.549V64.549ZM121.382 59.2515H120.115V62.7064C120.115 63.3974 120.461 63.5701 120.864 63.5701C121.037 63.5701 121.209 63.5125 121.267 63.5125L121.497 64.549C121.382 64.6066 121.094 64.6641 120.691 64.6641C119.712 64.6641 118.848 64.1459 118.848 62.9943V59.3091H117.927V58.3302H118.848V56.833H120.058V58.3302H121.324V59.2515H121.382ZM122.419 62.764C122.419 61.3244 123.628 61.0365 124.837 60.8638C125.989 60.7486 126.449 60.7486 126.449 60.2879C126.449 59.597 126.046 59.1363 125.24 59.1363C124.434 59.1363 123.973 59.5394 123.8 60L122.649 59.7121C123.052 58.5605 124.088 58.0998 125.24 58.0998C126.219 58.0998 127.658 58.4453 127.658 60.2879V64.4338H126.449V63.5701H126.392C126.161 64.0307 125.586 64.549 124.549 64.549C123.397 64.6641 122.419 63.9732 122.419 62.764ZM126.449 62.3033V61.4972C126.277 61.6699 125.355 61.7851 124.952 61.8426C124.261 61.9578 123.685 62.1881 123.685 62.8215C123.685 63.3973 124.204 63.7428 124.895 63.7428C125.873 63.6853 126.449 62.9943 126.449 62.3033ZM132.207 59.2515H130.941V62.7064C130.941 63.3974 131.286 63.5701 131.689 63.5701C131.862 63.5701 132.035 63.5125 132.092 63.5125L132.323 64.549C132.207 64.6066 131.92 64.6641 131.516 64.6641C130.538 64.6641 129.674 64.1459 129.674 62.9943V59.3091H128.753V58.3302H129.674V56.833H130.883V58.3302H132.15V59.2515H132.207ZM133.417 56.5451C133.417 56.1421 133.762 55.7966 134.165 55.7966C134.568 55.7966 134.914 56.1421 134.914 56.5451C134.914 56.9482 134.568 57.2937 134.165 57.2937C133.762 57.2937 133.417 56.9482 133.417 56.5451ZM133.589 58.2726H134.799V64.549H133.589V58.2726ZM136.181 61.4396C136.181 59.4818 137.332 58.215 139.117 58.215C140.902 58.215 142.054 59.4818 142.054 61.4396C142.054 63.3973 140.902 64.6641 139.117 64.6641C137.332 64.6641 136.181 63.3973 136.181 61.4396ZM140.787 61.4396C140.787 60.2304 140.269 59.1939 139.117 59.1939C137.966 59.1939 137.447 60.2304 137.447 61.4396C137.447 62.6488 137.966 63.6277 139.117 63.6277C140.211 63.6277 140.787 62.6488 140.787 61.4396ZM144.587 64.549H143.378V58.2726H144.53V59.3091H144.587C144.875 58.6181 145.509 58.215 146.43 58.215C147.697 58.215 148.561 59.0211 148.561 60.5758V64.549H147.409V60.691C147.409 59.7697 146.891 59.2515 146.085 59.2515C145.221 59.2515 144.645 59.8273 144.645 60.8062V64.549H144.587ZM60.2303 74.2803C60.2303 72.8407 61.4395 72.5528 62.6488 72.3801C63.8004 72.2649 64.261 72.2649 64.261 71.8043C64.261 71.1133 63.858 70.6526 63.0518 70.6526C62.2457 70.6526 61.785 71.0557 61.6123 71.5164L60.4607 71.2285C60.8637 70.0768 61.9002 69.6162 63.0518 69.6162C64.0307 69.6162 65.4703 69.9617 65.4703 71.8043V75.9502H64.261V75.0864H64.2035C63.9731 75.5471 63.3973 76.0653 62.3609 76.0653C61.1516 76.1805 60.2303 75.4895 60.2303 74.2803ZM64.2035 73.8196V73.0135C64.0307 73.1862 63.1094 73.3014 62.7063 73.359C62.0154 73.4741 61.4395 73.7045 61.4395 74.3379C61.4395 74.9137 61.9578 75.2592 62.6488 75.2592C63.6276 75.2016 64.2035 74.5106 64.2035 73.8196ZM70.0192 70.7678H68.7524V74.2227C68.7524 74.9137 69.0979 75.0864 69.501 75.0864C69.6737 75.0864 69.8465 75.0288 69.9041 75.0288L70.1344 76.0653C70.0192 76.1229 69.7313 76.1805 69.3282 76.1805C68.3493 76.1805 67.4856 75.6622 67.4856 74.5106V70.8254H66.5643V69.8465H67.4856V68.3494H68.6948V69.8465H69.9616V70.7678H70.0192ZM77.3321 68.6373C76.2956 68.6373 75.6622 69.1555 75.6622 69.9041C75.6622 70.7102 76.5259 70.9981 77.1593 71.1709L77.9655 71.4012C79.002 71.6891 80.3839 72.2649 80.3839 73.7621C80.3839 75.2016 79.2323 76.2381 77.2745 76.2381C75.3743 76.2381 74.2227 75.3168 74.1651 73.7621H75.4319C75.4895 74.6834 76.2956 75.0864 77.2745 75.0864C78.3686 75.0864 79.1171 74.5682 79.1171 73.7045C79.1171 72.9559 78.4261 72.668 77.5048 72.4377L76.5259 72.1498C75.2016 71.8043 74.3378 71.1133 74.3378 69.9617C74.3378 68.5221 75.6046 67.5432 77.3321 67.5432C79.0595 67.5432 80.2112 68.5221 80.2687 69.8465H79.0595C78.9444 69.0979 78.311 68.6373 77.3321 68.6373ZM81.5356 74.2803C81.5356 72.8407 82.7448 72.5528 83.954 72.3801C85.1056 72.2649 85.5663 72.2649 85.5663 71.8043C85.5663 71.1133 85.1632 70.6526 84.3571 70.6526C83.5509 70.6526 83.0903 71.0557 82.9175 71.5164L81.7659 71.2285C82.1689 70.0768 83.2054 69.6162 84.3571 69.6162C85.3359 69.6162 86.7755 69.9617 86.7755 71.8043V75.9502H85.5663V75.0864H85.5087C85.2784 75.5471 84.7025 76.0653 83.6661 76.0653C82.4569 76.1805 81.5356 75.4895 81.5356 74.2803ZM85.5087 73.8196V73.0135C85.3359 73.1862 84.4146 73.3014 84.0116 73.359C83.3206 73.4741 82.7448 73.7045 82.7448 74.3379C82.7448 74.9137 83.263 75.2592 83.954 75.2592C84.9329 75.2016 85.5087 74.5106 85.5087 73.8196ZM91.2093 76.0653H89.8849L87.5816 69.7889H88.906L90.5183 74.6258H90.5759L92.1882 69.7889H93.5125L91.2093 76.0653ZM94.1459 74.2803C94.1459 72.8407 95.3551 72.5528 96.5644 72.3801C97.716 72.2649 98.1767 72.2649 98.1767 71.8043C98.1767 71.1133 97.7736 70.6526 96.9674 70.6526C96.1613 70.6526 95.7006 71.0557 95.5279 71.5164L94.3763 71.2285C94.7793 70.0768 95.8158 69.6162 96.9674 69.6162C97.9463 69.6162 99.3859 69.9617 99.3859 71.8043V75.9502H98.1767V75.0864H98.1191C97.8887 75.5471 97.3129 76.0653 96.2765 76.0653C95.1248 76.1805 94.1459 75.4895 94.1459 74.2803ZM98.1767 73.8196V73.0135C98.0039 73.1862 97.0826 73.3014 96.6795 73.359C95.9885 73.4741 95.4127 73.7045 95.4127 74.3379C95.4127 74.9137 95.931 75.2592 96.6219 75.2592C97.6008 75.2016 98.1767 74.5106 98.1767 73.8196ZM104.626 71.5164C104.511 71.1133 104.108 70.6526 103.359 70.6526C102.668 70.6526 102.15 70.9981 102.15 71.4588C102.15 71.8619 102.438 72.0922 103.129 72.2649L104.108 72.4953C105.259 72.7832 105.835 73.3014 105.835 74.2227C105.835 75.3743 104.799 76.1805 103.244 76.1805C101.862 76.1805 100.883 75.5471 100.71 74.453L101.919 74.2803C102.092 74.9137 102.553 75.2016 103.244 75.2016C104.05 75.2016 104.568 74.7985 104.568 74.3379C104.568 73.9348 104.28 73.7045 103.704 73.5317L102.668 73.3014C101.516 73.0135 100.941 72.4377 100.941 71.5739C100.941 70.4799 101.919 69.7313 103.359 69.7313C104.741 69.7313 105.49 70.3647 105.72 71.3436L104.626 71.5164ZM110.326 67.716H111.593V74.9713H115.394V76.0653H110.326V67.716V67.716ZM116.43 74.2803C116.43 72.8407 117.639 72.5528 118.848 72.3801C120 72.2649 120.461 72.2649 120.461 71.8043C120.461 71.1133 120.058 70.6526 119.252 70.6526C118.445 70.6526 117.985 71.0557 117.812 71.5164L116.66 71.2285C117.063 70.0768 118.1 69.6162 119.252 69.6162C120.23 69.6162 121.67 69.9617 121.67 71.8043V75.9502H120.461V75.0864H120.403C120.173 75.5471 119.597 76.0653 118.561 76.0653C117.351 76.1805 116.43 75.4895 116.43 74.2803ZM120.461 73.8196V73.0135C120.288 73.1862 119.367 73.3014 118.964 73.359C118.273 73.4741 117.697 73.7045 117.697 74.3379C117.697 74.9137 118.215 75.2592 118.906 75.2592C119.827 75.2016 120.461 74.5106 120.461 73.8196ZM123.397 67.716H124.607V70.8254H124.664C124.895 70.4223 125.298 69.7313 126.449 69.7313C127.946 69.7313 129.098 70.9405 129.098 72.9559C129.098 74.9713 128.004 76.1805 126.449 76.1805C125.298 76.1805 124.837 75.4895 124.607 75.0864H124.491V76.0653H123.282V67.716H123.397ZM126.219 75.144C127.313 75.144 127.889 74.1651 127.889 72.8983C127.889 71.6315 127.313 70.7102 126.219 70.7102C125.125 70.7102 124.607 71.5739 124.607 72.8983C124.607 74.2227 125.182 75.144 126.219 75.144ZM134.108 71.5164C133.992 71.1133 133.589 70.6526 132.841 70.6526C132.15 70.6526 131.632 70.9981 131.632 71.4588C131.632 71.8619 131.92 72.0922 132.61 72.2649L133.589 72.4953C134.741 72.7832 135.317 73.3014 135.317 74.2227C135.317 75.3743 134.28 76.1805 132.726 76.1805C131.344 76.1805 130.365 75.5471 130.192 74.453L131.401 74.2803C131.574 74.9137 132.035 75.2016 132.726 75.2016C133.532 75.2016 134.05 74.7985 134.05 74.3379C134.05 73.9348 133.762 73.7045 133.186 73.5317L132.15 73.3014C130.998 73.0135 130.422 72.4377 130.422 71.5739C130.422 70.4799 131.401 69.7313 132.841 69.7313C134.223 69.7313 134.971 70.3647 135.202 71.3436L134.108 71.5164Z"
                  fill="#000000"
                ></path>
                <path
                  d="M53.551 25.3935V16.6987C53.551 15.3167 52.4569 14.2227 51.0749 14.2227H50.4415C49.5778 12.668 48.5989 11.1708 47.5049 9.84647L49.6354 7.37045L50.2112 6.67947C50.9598 5.81575 51.1325 4.60653 50.6143 3.62765C50.1536 2.59118 49.1172 1.95778 48.0231 1.95778H40.3647C38.2342 1.95778 36.1613 1.66987 34.1459 1.09405C31.7851 0.34549 29.3091 0 26.7755 0C24.2419 0 21.7659 0.34549 19.405 1.03647C17.3897 1.61229 15.3167 1.9002 13.1862 1.9002H5.58542C4.43379 1.9002 3.4549 2.53359 2.99425 3.57006C2.47601 4.60653 2.64876 5.81575 3.39732 6.67947L6.04608 9.84647C4.95202 11.2284 3.91555 12.668 3.10941 14.2803H2.47601C1.09405 14.2227 0 15.3167 0 16.6987V25.3935V26.7755C0 31.0941 1.03647 35.3551 2.99425 39.1555C1.03647 42.9559 0 47.1594 0 51.478C0 57.0059 1.72745 62.4185 4.89444 66.9099L4.83686 66.9675L5.98849 68.407L7.42804 70.1921L7.48562 70.1345C12.4952 75.3168 19.405 78.3111 26.7179 78.3111C27.8695 78.3111 28.9636 78.2535 30.1152 78.0807C31.5548 77.908 32.6488 76.8715 32.9367 75.4896C32.9367 75.3744 32.9943 75.2592 32.9943 75.1441C33.3974 75.3168 33.8004 75.4896 34.1459 75.6623C38.2918 77.4473 42.7256 78.3111 47.2745 78.3111H50.1536C51.9962 78.3111 53.4358 76.8139 53.4358 75.0289V51.478C53.4358 47.1594 52.3993 42.8983 50.384 39.098C52.3417 35.2976 53.4358 31.0365 53.4358 26.7179V25.3935H53.551ZM26.7755 27.6968L26.4876 27.3513C26.6027 27.3513 26.7179 27.3513 26.8331 27.3513C26.8906 27.3513 27.0058 27.3513 27.0634 27.3513L26.7755 27.6968Z"
                  fill="white"
                ></path>
                <path
                  d="M51.075 16.2952H48.2535C46.526 13.1858 43.2439 11.2856 39.6738 11.2856H13.9924C10.4223 11.2856 7.14018 13.1858 5.41273 16.2952H2.47607C2.24574 16.2952 2.073 16.468 2.073 16.6983V25.3932C2.073 25.6235 2.24574 25.7962 2.47607 25.7962H5.29757C7.88875 30.5755 13.8772 32.3605 18.6565 29.7694C19.6354 29.2511 20.5567 28.5026 21.3053 27.6964C22.6872 26.1417 24.7026 25.278 26.7755 25.278C28.8485 25.278 30.8063 26.1417 32.1882 27.6388C34.0884 29.7694 36.7372 30.9786 39.6162 30.9786C43.2439 30.9786 46.5836 28.9632 48.3111 25.7962H51.075C51.3053 25.7962 51.4781 25.6235 51.4781 25.3932V16.6983C51.4781 16.468 51.3053 16.2952 51.075 16.2952ZM39.6162 30.1724C37.0251 30.1724 34.6642 29.0784 32.8792 27.1206C31.3245 25.4507 29.1364 24.4718 26.8331 24.4718C24.5298 24.4718 22.2842 25.4507 20.7295 27.1782C17.3897 30.8634 11.6891 31.1513 8.00391 27.8116C4.31868 24.4718 4.03078 18.7713 7.37051 15.086C9.09796 13.1858 11.5164 12.0918 14.05 12.0918H39.6738C44.6259 12.0918 48.7142 16.1225 48.7142 21.1321C48.6566 26.0841 44.6259 30.1724 39.6162 30.1724Z"
                  fill="#000000"
                ></path>
                <path
                  d="M4.95187 5.29782C4.49122 4.77958 4.89429 3.97344 5.58527 3.97344H13.1861C15.4893 3.97344 17.735 3.68553 19.9231 3.05213C22.1112 2.41873 24.3569 2.07324 26.7753 2.07324C29.1938 2.07324 31.4394 2.41873 33.6275 3.05213C35.8156 3.68553 38.1189 3.97344 40.3646 3.97344H47.9654C48.6564 3.97344 49.0594 4.77958 48.5988 5.3554L45.4894 9.04062C45.0863 9.50128 45.0863 10.1923 45.4894 10.6529C46.5834 11.9197 47.5623 13.3017 48.3685 14.7412C46.3531 12.0349 43.1285 10.365 39.6736 10.365H13.9922C10.307 10.365 6.85207 12.2652 4.89429 15.3746C5.75802 13.7047 6.85207 12.0925 8.11887 10.6529C8.52194 10.1923 8.52194 9.50128 8.11887 9.04062L4.95187 5.29782ZM24.3569 19.866C24.3569 17.6203 22.5143 15.7201 20.211 15.7201C17.9077 15.7201 16.1227 17.5627 16.1227 19.866C16.1227 22.1692 17.9653 24.0119 20.2686 24.0119C22.5719 24.0119 24.3569 22.1117 24.3569 19.866ZM33.2821 23.9543C31.0364 23.9543 29.1362 22.1117 29.1362 19.8084C29.1362 17.5051 30.9788 15.6625 33.2821 15.6625C35.5853 15.6625 37.4279 17.5051 37.4279 19.8084C37.4279 22.1117 35.5853 23.9543 33.2821 23.9543ZM10.307 51.4783C10.307 42.3804 17.6774 35.01 26.7753 35.01C35.8732 35.01 43.2437 42.3804 43.2437 51.4783V67.5436C38.5796 66.6799 34.2034 64.4918 30.806 61.0945C26.3723 56.6607 23.8962 50.7298 23.8962 44.4533C23.8962 42.5532 24.1266 40.7105 24.5296 38.9255C24.76 38.0618 23.9538 37.2556 23.0901 37.486C20.9596 38.0618 18.9442 39.0983 17.2743 40.5954C17.1592 40.7105 17.044 40.8257 16.9289 40.9409C16.1803 41.6318 15.7196 42.6683 15.7196 43.7048C15.7196 43.9351 15.7196 44.1654 15.7196 44.4533C15.7196 48.7144 16.5834 52.8603 18.1957 56.7758C19.8079 60.5762 22.0536 63.916 24.9903 66.8526C27.927 69.7893 31.2667 72.035 35.0671 73.6473C38.9826 75.3171 43.1285 76.1233 47.3896 76.1233H50.2686C50.9596 76.1233 51.4779 75.5475 51.4779 74.9141V51.4783C51.4779 46.9869 50.2686 42.7835 48.1381 39.0983C50.2686 35.4706 51.4779 31.2672 51.4779 26.7182V26.6606C51.3627 26.7182 51.19 26.7182 51.0748 26.7182H48.8867C46.9289 29.9428 43.4164 31.9005 39.6736 31.9005C36.5642 31.9005 33.6275 30.5186 31.5546 28.2153C31.1515 27.8122 30.6909 27.4092 30.2302 27.1213C29.9999 27.2364 29.712 27.3516 29.5392 27.5819L26.8329 30.8065L24.1266 27.5819C23.9538 27.4092 23.7235 27.2364 23.4932 27.1213C22.9749 27.4092 22.5143 27.8122 22.1112 28.2729C21.3051 29.1942 20.3262 29.9428 19.2321 30.5762C17.6774 31.4399 15.8924 31.9005 14.1074 31.9005C10.307 31.9005 6.79449 29.9428 4.83671 26.7182H2.53344C2.3607 26.7182 2.24553 26.6606 2.13037 26.6606V26.7182C2.13037 31.2096 3.33959 35.4706 5.47011 39.0983C3.33959 42.7259 2.13037 46.9294 2.13037 51.4207C2.13037 57.3516 4.20331 62.7643 7.71579 67.0254C12.2647 72.5532 19.117 76.1233 26.8329 76.1233C27.927 76.1233 28.9634 76.0657 29.9999 75.9505C31.1515 75.7778 31.497 74.2807 30.4606 73.6473C27.927 72.2077 25.6237 70.4227 23.5508 68.2922C22.9749 67.7163 22.284 67.2557 21.4778 66.9678C18.4836 65.9313 15.8348 64.0311 13.877 61.5551C11.6313 58.8488 10.307 55.3363 10.307 51.4783Z"
                  fill="#000000"
                ></path>
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="5"
                  y="12"
                  width="44"
                  height="19"
                >
                  <path
                    d="M39.6206 30.129C37.0294 30.129 34.6686 29.0349 32.8836 27.0772C31.3289 25.4073 29.1408 24.4284 26.8375 24.4284C24.5342 24.4284 22.2885 25.4073 20.7338 27.1347C17.3941 30.82 11.6935 31.1079 8.00828 27.7681C4.32305 24.4284 4.03514 18.7278 7.37488 15.0426C9.10233 13.1424 11.5208 12.0483 14.0544 12.0483H39.6782C44.6302 12.0483 48.7185 16.0791 48.7185 21.0887C48.6609 26.0407 44.6302 30.129 39.6206 30.129Z"
                    fill="#000000"
                  ></path>
                </mask>
                <g mask="url(#mask0)">
                  <path
                    className="glare"
                    d="M55.945 11.2422L36.2522 30.9349H2.76831L22.4611 11.2422H55.945Z"
                    opacity="0.7"
                    fill="#006DB4"
                  ></path>
                  <path
                    className="glare"
                    d="M19.9138 11.2427L0.221083 30.9354H-6.24561L13.4471 11.2427H19.9138Z"
                    opacity="0.7"
                    fill="#006DB4"
                  ></path>
                </g>
              </svg>
            </a>
          </section>
        </article>
      </div>
    </main>
  )
}

export default Homepage
