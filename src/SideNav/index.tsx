import React, { FC, ReactNode } from 'react';
import { Link, useCurrentRoute } from 'react-navi';
type Props = {
  children: Element | ReactNode
}

const SideNav: FC<Props> = ({children}: Props) => {

  let route = useCurrentRoute();

  // console.log(route);
  

  const layers = [
    {
      layerName: "Home",
      link: '/'
    },
    {
      layerName: "Pomodoro Timer",
      link: '/pomodoro-timer'
    },
    {
      layerName: "Server",
      link: '/server'
    },
    {
      layerName: "Settings",
      link: '/settings'
    },
  ]

  return (
    <div className="flex h-full">
      {
        route.data.showSideNav && 
          <div id="sidePanel" className="bg-dracula-dark p-6 text-dracula-light text-center flex flex-col">
          <p className="text-2xl underline">Routes</p>
            {
              layers.map((layer, index)=>{return (
                <Link key={"link-button-"+index} href={layer.link} className="bg-dracula-blade p-6 text-dracula-darker font-semibold rounded-md my-5">
                  {layer.layerName}
                </Link>
              )})
            }
          </div>
      }
      <div id="content" className="w-full">
        {children}
      </div>
    </div>
  );
};

export default SideNav;
