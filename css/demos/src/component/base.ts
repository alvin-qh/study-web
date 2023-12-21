export interface Component {
  render: ($h: HTMLElement) => void
}

export interface ErrorPage extends Component {
  setError: (name: string, message: string) => void
}
