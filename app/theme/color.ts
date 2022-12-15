import { palette } from "./palette"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: palette.transparent,
  /**
   * The screen background.
   */
  background: palette.white[0],
  /**
   * The main tinting color.
   */
  primary: palette.teal[1],

  secondary: palette.blue[1],

  secondaryText: palette.blue[2],

  divider: palette.blue[1],

  menuIcon: palette.teal[1],

  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.teal[3],
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.blue[1],
  /**
   * The default color of text in many components.
   */
  text: palette.grey[5],
  /**
   * Secondary information.
   */
  dim: palette.grey[2],
  /**
   * Error messages and icons.
   */
  error: palette.red,

  link: palette.teal[1],

  headerBackground: palette.grey[0],

  transport_arrived: palette.white[0],

  cleared: palette.white[0],

  modalBackdrop: palette.translucentBlack,

  buttonBackground: palette.teal[0],
  buttonText: palette.grey[1],
  buttonBorder: palette.grey[1],
}
