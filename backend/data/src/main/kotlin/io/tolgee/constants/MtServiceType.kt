package io.tolgee.constants

import io.tolgee.component.machineTranslation.MtValueProvider
import io.tolgee.component.machineTranslation.providers.*
import io.tolgee.configuration.tolgee.machineTranslation.*

enum class MtServiceType(
  val propertyClass: Class<out MachineTranslationServiceProperties>,
  val providerClass: Class<out MtValueProvider>
) {
  GOOGLE(GoogleMachineTranslationProperties::class.java, GoogleTranslationProvider::class.java),
  AWS(AwsMachineTranslationProperties::class.java, AwsMtValueProvider::class.java),
  DEEPL(DeeplMachineTranslationProperties::class.java, DeeplTranslationProvider::class.java),
  AZURE(AzureCognitiveTranslationProperties::class.java, AzureCognitiveTranslationProvider::class.java),
  BAIDU(BaiduMachineTranslationProperties::class.java, BaiduTranslationProvider::class.java);
}
