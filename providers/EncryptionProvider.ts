/**
 * @module @adonisjs/encryption
 */

/*
 * @adonisjs/encryption
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import { IocContract } from '@adonisjs/fold'
import { Encryption } from '../src/Encryption'

export default class EncryptionProvider {
  constructor (protected $container: IocContract) {}

  public register () {
    this.$container.singleton('Adonis/Core/Encryption', () => {
      const Config = this.$container.use('Adonis/Core/Config')
      return new Encryption(Config.get('app.appKey'))
    })
  }
}