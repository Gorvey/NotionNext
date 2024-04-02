/* eslint-disable @next/next/no-img-element */
/*
 * @Author: zengzhe
 * @Date: 2024-04-01 11:11:07
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-04-02 11:00:29
 * @Description:
 */
// import DarkModeButton from '@/components/DarkModeButton'
// import Vercel from '@/components/Vercel'
import { siteConfig } from '@/lib/config'
const Notion = () => {
  return (
    <a href='https://www.notion.so/' target='_blank' rel='noreferrer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='145.3'
        height='20'
        viewBox='0 0 1453 200'
        role='img'
        aria-label='Posts written on: Notion'>
        <script xmlns='' />
        <title>Posts written on: Notion</title>
        <linearGradient id='NwoOv' x2='0' y2='100%'>
          <stop offset='0' stop-opacity='.1' stop-color='#EEE' />
          <stop offset='1' stop-opacity='.1' />
        </linearGradient>
        <mask id='JXzzq'>
          <rect width='1453' height='200' rx='30' fill='#FFF' />
        </mask>
        <g mask='url(#JXzzq)'>
          <rect width='994' height='200' fill='#555' />
          <rect width='459' height='200' fill='#F73' x='994' />
          <rect width='1453' height='200' fill='url(#NwoOv)' />
        </g>
        <g
          aria-hidden='true'
          fill='#fff'
          text-anchor='start'
          font-family='Verdana,DejaVu Sans,sans-serif'
          font-size='110'>
          <text x='60' y='148' textLength='894' fill='#000' opacity='0.25'>
            Posts written on
          </text>
          <text x='50' y='138' textLength='894'>
            Posts written on
          </text>
          <text x='1049' y='148' textLength='359' fill='#000' opacity='0.25'>
            Notion
          </text>
          <text x='1039' y='138' textLength='359'>
            Notion
          </text>
        </g>

        <script xmlns='' />
        <style id='stylus-1' type='text/css' class='stylus' />
      </svg>
    </a>
  )
}
const NotionNext = () => {
  return (
    <a
      href='https://github.com/tangly1024/NotionNext'
      target='_blank'
      rel='noreferrer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='118'
        height='20'
        role='img'
        aria-label='Frame: notion-next'>
        <title>Frame: notion-next</title>
        <linearGradient id='s' x2='0' y2='100%'>
          <stop offset='0' stop-color='#bbb' stop-opacity='.1' />
          <stop offset='1' stop-opacity='.1' />
        </linearGradient>
        <clipPath id='r'>
          <rect width='118' height='20' rx='3' fill='#fff' />
        </clipPath>
        <g clip-path='url(#r)'>
          <rect width='45' height='20' fill='#555' />
          <rect x='45' width='73' height='20' fill='#007ec6' />
          <rect width='118' height='20' fill='url(#s)' />
        </g>
        <g
          fill='#fff'
          text-anchor='middle'
          font-family='Verdana,Geneva,DejaVu Sans,sans-serif'
          font-size='110'>
          <text
            aria-hidden='true'
            x='235'
            y='150'
            fill='#010101'
            fill-opacity='.3'
            transform='scale(.1)'
            textLength='350'>
            Frame
          </text>
          <text
            x='235'
            y='140'
            transform='scale(.1)'
            fill='#fff'
            textLength='350'>
            Frame
          </text>
          <text
            aria-hidden='true'
            x='805'
            y='150'
            fill='#010101'
            fill-opacity='.3'
            transform='scale(.1)'
            textLength='630'>
            notion-next
          </text>
          <text
            x='805'
            y='140'
            transform='scale(.1)'
            fill='#fff'
            textLength='630'>
            notion-next
          </text>
        </g>
      </svg>
    </a>
  )
}
const Vercel = () => {
  return (
    <a href='https://vercel.com' target='_blank' rel='noreferrer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='90'
        height='20'
        role='img'
        aria-label='hosted: vercel'>
        <script xmlns='' />
        <title>hosted: vercel</title>
        <linearGradient id='s' x2='0' y2='100%'>
          <stop offset='0' stop-color='#bbb' stop-opacity='.1' />
          <stop offset='1' stop-opacity='.1' />
        </linearGradient>
        <clipPath id='r'>
          <rect width='90' height='20' rx='3' fill='#fff' />
        </clipPath>
        <g clip-path='url(#r)'>
          <rect width='47' height='20' fill='#555' />
          <rect x='47' width='43' height='20' fill='black' />
          <rect width='90' height='20' fill='url(#s)' />
        </g>
        <g
          fill='#fff'
          text-anchor='middle'
          font-family='Verdana,Geneva,DejaVu Sans,sans-serif'
          font-size='110'>
          <text
            aria-hidden='true'
            x='245'
            y='150'
            fill='#010101'
            fill-opacity='.3'
            transform='scale(.1)'
            textLength='370'>
            hosted
          </text>
          <text
            x='245'
            y='140'
            transform='scale(.1)'
            fill='#fff'
            textLength='370'>
            hosted
          </text>
          <text
            aria-hidden='true'
            x='675'
            y='150'
            fill='#010101'
            fill-opacity='.3'
            transform='scale(.1)'
            textLength='330'>
            vercel
          </text>
          <text
            x='675'
            y='140'
            transform='scale(.1)'
            fill='#fff'
            textLength='330'>
            vercel
          </text>
        </g>
      </svg>
    </a>
  )
}
export const Footer = props => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const { post } = props
  const fullWidth = post?.fullWidth ?? false
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer
      className={`z-10 relative mt-2 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${!fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}>
      {/* <DarkModeButton className='text-center py-4'/> */}
      <hr className='border-gray-200 dark:border-gray-600' />
      <div className='my-4 text-sm leading-6'>
        <div className='flex align-baseline justify-between flex-wrap flex-col md:flex-row'>
          <div className='flex gap-2'>
            <p >
              © {siteConfig('AUTHOR')} {copyrightDate}
            </p>
            {siteConfig('CONTACT_GITHUB') && <a target='_blank' rel='noreferrer' title={'github'} href={siteConfig('CONTACT_GITHUB')} >
              <i className='transform hover:scale-125 duration-150 fab fa-github dark:hover:text-red-400 hover:text-blue-600' />
            </a>}
            {siteConfig('CONTACT_EMAIL') && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${siteConfig('CONTACT_EMAIL')}`} >
              <i className='fas fa-envelope transform hover:scale-125 duration-150 hover:text-blue-600' />
            </a>}
            {JSON.parse(siteConfig('ENABLE_RSS')) && <a target='_blank' rel='noreferrer' title={'RSS'} href={'/rss/feed.xml'} >
              <i className='transform hover:scale-125 duration-150 fas fa-rss dark:hover:text-red-400 hover:text-blue-600' />
            </a>}
          </div>
          <div className='flex flex-wrap items-center gap-2 justify-end mt-2 md:mt-0'>
            <Notion />
            <NotionNext />
            <Vercel />
          </div>
        </div>
      </div>
    </footer>
  )
}
