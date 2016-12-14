import { flexCenter, font, lightBorder } from '../../global/styles';

export const styles = {
  bodyContainer: Object.assign(flexCenter("column"), lightBorder('all'), {
    backgroundColor: "rgba(240, 240, 240, 1)"
  }),
  bodyText: Object.assign(font, {
    textAlign: "center"
  })
}
