import movita from "../public/movitaqr.png"
import movitaWeb from "../public/movitaapp.webp"
import movitaCamera from "../public/movitaCameraApp.webp"
import movitaServis from "../public/movitaServisApp.webp"
import movitaAt from "../public/movitaAtApp.webp"
import movitaAtqr from "../public/movitaAtAndroid.png"
import android from "../public/android.svg"
import all from "../public/all.svg"
import ios from "../public/ios.svg"
import windows from "../public/windows.svg"
import Image from "next/image";
export  const appTabs = [
    {
        id: 1,
        name: "Tümü",
        poKey: "all",
        image: <Image src={all} alt="AI Icon" width={15} height={15}/>,
        apps:[
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                href:"https://play.google.com/store/apps/details?id=com.smarteq.arizto.movita"
              },
            {
                icon: <Image src={movitaServis} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Servis',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araç içerisinde, cihaza WiFi ile bağlanarak, cihazın durumu, diskin doluluk oranı hakkında bilgi alabilir, koltuk sensörü özelliğini açabilir, kamerayı büyütebilirsiniz',
                href:"https://play.google.com/store/apps/details?id=com.smarteq.movita.servis"
              },
            {
                icon: <Image src={movitaCamera} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Kamera',
                description: 'MNVR cihazınıza bağlı olan kameraları kesintisiz bir şekilde izlemenize olanak sağlar.',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                href:"https://play.google.com/store/apps/details?id=com.smarteq.arizto.movitacamlite"
              },
            {
                icon: <Image src={movitaAt} alt="AI Icon" width={200} height={200}/>,
                title: 'MovitaAt',
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, raporları görüntüleyebilirsiniz',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                href:"https://play.google.com/store/apps/details?id=com.smarteq.arizto.movitalite"
              },
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
                href:"https://apps.apple.com/tr/app/movita-kameral%C4%B1-ara%C3%A7-takip/id1442163761?l=tr"
              },
            {
                icon: <Image src={movitaServis} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Servis',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araç içerisinde, cihaza WiFi ile bağlanarak, cihazın durumu, diskin doluluk oranı hakkında bilgi alabilir, koltuk sensörü özelliğini açabilir, kamerayı büyütebilirsiniz',
                href:"https://apps.apple.com/tr/app/movita-servis/id1531073881?l=tr"
              },
            {
                icon: <Image src={movitaCamera} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita Kamera ',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'MNVR cihazınıza bağlı olan kameraları kesintisiz bir şekilde izlemenize olanak sağlar.',
                href:"https://apps.apple.com/tr/app/movita-kamera-takip/id1447758252?l=tr"
              },
            {
                icon: <Image src={movitaAt} alt="AI Icon" width={200} height={200}/>,
                title: 'MovitaAt',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, raporları görüntüleyebilirsiniz',
                href:"https://apps.apple.com/tr/app/movita-ara%C3%A7-takip/id1447738737?l=tr"
              },
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
                href:"/"
              },
              
        ]
    },
    {
        id: 2,
        name: "Android",
        poKey: "android",
        image: <Image src={android} alt="AI Icon" width={15} height={15}/>,
        apps:[
          {
            icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
            title: 'Movita',
            description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
            qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
            href:"https://play.google.com/store/apps/details?id=com.smarteq.arizto.movita"
          },
        {
            icon: <Image src={movitaServis} alt="AI Icon" width={200} height={200}/>,
            title: 'Movita Servis',
            qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
            description: 'Araç içerisinde, cihaza WiFi ile bağlanarak, cihazın durumu, diskin doluluk oranı hakkında bilgi alabilir, koltuk sensörü özelliğini açabilir, kamerayı büyütebilirsiniz',
            href:"https://play.google.com/store/apps/details?id=com.smarteq.movita.servis"
          },
        {
            icon: <Image src={movitaCamera} alt="AI Icon" width={200} height={200}/>,
            title: 'Movita Kamera',
            description: 'MNVR cihazınıza bağlı olan kameraları kesintisiz bir şekilde izlemenize olanak sağlar.',
            qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
            href:"https://play.google.com/store/apps/details?id=com.smarteq.arizto.movitacamlite"
          },
        {
            icon: <Image src={movitaAt} alt="AI Icon" width={200} height={200}/>,
            title: 'MovitaAt',
            description: 'Araçlarınızı dilediğiniz yerden takip edebilir, raporları görüntüleyebilirsiniz',
            qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
            href:"https://play.google.com/store/apps/details?id=com.smarteq.arizto.movitalite"
          },
            
              
        ]
    },
    {
        id: 3,
        name: "IOS",
        poKey: "ios",
        image: <Image src={ios} alt="AI Icon" width={15} height={15}/>,
        apps:[
           
          {
            icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
            title: 'Movita',
            qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
            description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
            href:"https://apps.apple.com/tr/app/movita-kameral%C4%B1-ara%C3%A7-takip/id1442163761?l=tr"
          },
        {
            icon: <Image src={movitaServis} alt="AI Icon" width={200} height={200}/>,
            title: 'Movita Servis',
            qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
            description: 'Araç içerisinde, cihaza WiFi ile bağlanarak, cihazın durumu, diskin doluluk oranı hakkında bilgi alabilir, koltuk sensörü özelliğini açabilir, kamerayı büyütebilirsiniz',
            href:"https://apps.apple.com/tr/app/movita-servis/id1531073881?l=tr"
          },
        {
            icon: <Image src={movitaCamera} alt="AI Icon" width={200} height={200}/>,
            title: 'Movita Kamera ',
            qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
            description: 'MNVR cihazınıza bağlı olan kameraları kesintisiz bir şekilde izlemenize olanak sağlar.',
            href:"https://apps.apple.com/tr/app/movita-kamera-takip/id1447758252?l=tr"
          },
        {
            icon: <Image src={movitaAt} alt="AI Icon" width={200} height={200}/>,
            title: 'MovitaAt',
            qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
            description: 'Araçlarınızı dilediğiniz yerden takip edebilir, raporları görüntüleyebilirsiniz',
            href:"https://apps.apple.com/tr/app/movita-ara%C3%A7-takip/id1447738737?l=tr"
          },
            
              
        ]
    },
    {
        id: 4,
        name: "Windows",
        poKey: "windows",
        image: <Image src={windows} alt="AI Icon" width={15} height={15}/>,
        apps:[
            {
                icon: <Image src={movitaWeb} alt="AI Icon" width={200} height={200}/>,
                title: 'Movita',
                qr:<Image src={movitaAtqr} alt="AI Icon" width={400} height={400}/>,
                description: 'Araçlarınızı dilediğiniz yerden takip edebilir, araç içi kameralara uzaktan bağlanarak canlı veya geçmiş kayıtları görüntüleyebilirsiniz.',
                href:"/"
              },
              
        ]
    },
      
]