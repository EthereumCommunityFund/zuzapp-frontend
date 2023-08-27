import Image from 'next/image';
import Link from 'next/link';
import {
  HiCollection,
  HiHome,
  HiLightningBolt,
  HiTicket,
  HiViewBoards,
} from 'react-icons/hi';

// Create a navigation side menu for the dashboard.
export default function DashboardNavigation() {
  return (
    <nav className='flex h-screen w-64 flex-col overflow-y-auto border-r border-r-gray-800 bg-[#2F3232E5] px-6 py-8'>
      <div>
        <Link href='/dashboard'>
          <Image
            src='/images/zuzalu-dashboard-logo.png'
            alt='Zuzalu Logo'
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className='flex flex-1 flex-col opacity-70'>
        <div className='mt-10 flex-1'>
          <ul className='space-y-5'>
            <li className='flex space-x-2 '>
              <HiHome size={20} />
              <Link href='/dashboard/home'>Home</Link>
            </li>
            <li className='flex space-x-2'>
              <HiViewBoards size={20} />
              <Link href='/dashboard/schedules'>Schedules</Link>
            </li>
            <li className='flex space-x-2'>
              <HiLightningBolt size={20} />
              <Link href='/dashboard/zapps'>Zapps</Link>
            </li>
            <li className='flex space-x-2'>
              <HiCollection size={20} />
              <Link href='/dashboard/resources'>Resources</Link>
            </li>
          </ul>
          <div className='my-10 flex justify-between'>
            <p>Your Events</p>
            <p>15</p>
          </div>
          <div className='w-full'>
            <Link
              href='/dashboard/events'
              className='flex w-full items-center justify-center rounded-3xl border border-[#FFFFFF1A] p-4 py-2'
            >
              <HiTicket className='mr-2 inline-block' size={20} />
              <span>View All RSVPs</span>
            </Link>
          </div>
        </div>
        {/* Profile navigation */}
        <ul>
          <li className='flex items-center space-x-2'>
            <Image
              src='/images/Avatar.png'
              alt='Avatar'
              width={32}
              height={32}
            />
            <Link href='/dashboard/profile'>My Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
