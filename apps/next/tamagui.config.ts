import {
	type ITamaguiComponentsConfig,
	tamaguiComponentsConfig,
} from '../../packages/components/src/tamagui.config'

/// Customized Tamagui. This replace the import of `tamagui` package for our customization.
declare module 'tamagui' {
	interface TamaguiCustomConfig extends ITamaguiComponentsConfig {}
}

export default tamaguiComponentsConfig
