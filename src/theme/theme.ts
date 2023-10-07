import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin"

export const customTheme: CustomThemeConfig = {
  name: "custom-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `Alexandria`,
    "--theme-font-family-heading": `Alexandria`,
    "--theme-font-color-base": "var(--color-secondary-900)",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "255 255 255",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "255 255 255",
    "--on-success": "255 255 255",
    "--on-warning": "255 255 255",
    "--on-error": "255 255 255",
    "--on-surface": "var(--color-secondary-900)",
    // =~= Theme Colors  =~=
    // primary | #087A87
    "--color-primary-50": "218 235 237", // #daebed
    "--color-primary-100": "206 228 231", // #cee4e7
    "--color-primary-200": "193 222 225", // #c1dee1
    "--color-primary-300": "156 202 207", // #9ccacf
    "--color-primary-400": "82 162 171", // #52a2ab
    "--color-primary-500": "8 122 135", // #087A87
    "--color-primary-600": "7 110 122", // #076e7a
    "--color-primary-700": "6 92 101", // #065c65
    "--color-primary-800": "5 73 81", // #054951
    "--color-primary-900": "4 60 66", // #043c42
    // secondary | #172021
    "--color-secondary-50": "220 222 222", // #dcdede
    "--color-secondary-100": "209 210 211", // #d1d2d3
    "--color-secondary-200": "197 199 200", // #c5c7c8
    "--color-secondary-300": "162 166 166", // #a2a6a6
    "--color-secondary-400": "93 99 100", // #5d6364
    "--color-secondary-500": "23 32 33", // #172021
    "--color-secondary-600": "21 29 30", // #151d1e
    "--color-secondary-700": "17 24 25", // #111819
    "--color-secondary-800": "14 19 20", // #0e1314
    "--color-secondary-900": "11 16 16", // #0b1010
    // tertiary | #043c42
    "--color-tertiary-50": "217 226 227", // #d9e2e3
    "--color-tertiary-100": "205 216 217", // #cdd8d9
    "--color-tertiary-200": "192 206 208", // #c0ced0
    "--color-tertiary-300": "155 177 179", // #9bb1b3
    "--color-tertiary-400": "79 119 123", // #4f777b
    "--color-tertiary-500": "4 60 66", // #043c42
    "--color-tertiary-600": "4 54 59", // #04363b
    "--color-tertiary-700": "3 45 50", // #032d32
    "--color-tertiary-800": "2 36 40", // #022428
    "--color-tertiary-900": "2 29 32", // #021d20
    // success | #0f8000
    "--color-success-50": "219 236 217", // #dbecd9
    "--color-success-100": "207 230 204", // #cfe6cc
    "--color-success-200": "195 223 191", // #c3dfbf
    "--color-success-300": "159 204 153", // #9fcc99
    "--color-success-400": "87 166 77", // #57a64d
    "--color-success-500": "15 128 0", // #0f8000
    "--color-success-600": "14 115 0", // #0e7300
    "--color-success-700": "11 96 0", // #0b6000
    "--color-success-800": "9 77 0", // #094d00
    "--color-success-900": "7 63 0", // #073f00
    // warning | #f06000
    "--color-warning-50": "253 231 217", // #fde7d9
    "--color-warning-100": "252 223 204", // #fcdfcc
    "--color-warning-200": "251 215 191", // #fbd7bf
    "--color-warning-300": "249 191 153", // #f9bf99
    "--color-warning-400": "245 144 77", // #f5904d
    "--color-warning-500": "240 96 0", // #f06000
    "--color-warning-600": "216 86 0", // #d85600
    "--color-warning-700": "180 72 0", // #b44800
    "--color-warning-800": "144 58 0", // #903a00
    "--color-warning-900": "118 47 0", // #762f00
    // error | #ff4747
    "--color-error-50": "255 227 227", // #ffe3e3
    "--color-error-100": "255 218 218", // #ffdada
    "--color-error-200": "255 209 209", // #ffd1d1
    "--color-error-300": "255 181 181", // #ffb5b5
    "--color-error-400": "255 126 126", // #ff7e7e
    "--color-error-500": "255 71 71", // #ff4747
    "--color-error-600": "230 64 64", // #e64040
    "--color-error-700": "191 53 53", // #bf3535
    "--color-error-800": "153 43 43", // #992b2b
    "--color-error-900": "125 35 35", // #7d2323
    // surface | #F6F6F6
    "--color-surface-50": "254 254 254", // #fefefe
    "--color-surface-100": "253 253 253", // #fdfdfd
    "--color-surface-200": "253 253 253", // #fdfdfd
    "--color-surface-300": "251 251 251", // #fbfbfb
    "--color-surface-400": "249 249 249", // #f9f9f9
    "--color-surface-500": "246 246 246", // #F6F6F6
    "--color-surface-600": "221 221 221", // #dddddd
    "--color-surface-700": "185 185 185", // #b9b9b9
    "--color-surface-800": "148 148 148", // #949494
    "--color-surface-900": "121 121 121", // #797979
  },
}
