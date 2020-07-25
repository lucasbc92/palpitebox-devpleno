# PalpiteBox - Fullstack Master Week

[! [HitCount] (https://hits.dwyl.com/tuliofaria/tuliofaria/palpite-box.svg)] (https://hits.dwyl.com/tuliofaria/tuliofaria/palpite-box)

This project was built during Fullstack Master Week from [DevPleno] (https://devpleno.com). An online version of this project can be found at: https://palpite-box.tuliofaria.dev/.

! [Preview] (https://github.com/lucasbc92/palpitebox-devpleno/blob/master/print.png?raw=true)

## Start



### Prerequisites:

You need NodeJS and NPM installed on your machine.

``
npm install
npm run dev
``

## Layout:

We created the layout using Figma. You can find the file [here] (https://www.figma.com/file/HxvAYhS6l7UDI49u8uLdaC/palpite-box?node-id=0%3A1).

## Putting into production:

This project can be put into production using Vercel. You need to create the environment variables to configure access to Google spreadsheets:

``
SHEET_CLIENT_EMAIL = service credential client email
SHEET_PRIVATE_KEY = service credential private key - remember to replace \ n with line breaks and base 64 code
SHEET_DOC_ID = spreadsheet id
``

## Built with:

* [NextJS] (https://nextjs.org/) -The React Framework.
* [TailwindCSS] (https://tailwindcss.com/) - A utility-first CSS framework for
rapidly building custom designs.
* [Figma] (https://figma.com/) - Online prototyping tool.
* [Google Sheets] (https://drive.google.com) - Google Sheets Online

## Author:

* ** Tulio Faria ** - [LinkedIn] (https://www.linkedin.com/in/tuliofaria/)


## License

This project is licensed under the MIT license - see [LICENSE.md] (LICENSE.md) for more information.

## Acknowledgments

* This project was built during [DevPleno] Fullstack Master Week (https://devpleno.com).
