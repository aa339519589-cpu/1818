import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const expectedSha256 = '419f5a97add6bed20d724eba25ed34ec1c8be87ad95c250d6fed2a9f00dbf106'
const scriptDir = dirname(fileURLToPath(import.meta.url))
const root = resolve(scriptDir, '..')
const recoveryDir = join(root, '.recovery')

const parts = readdirSync(recoveryDir)
  .filter((name) => name.startsWith('part-'))
  .sort()

if (parts.length !== 5) {
  throw new Error(`Expected 5 recovery chunks, found ${parts.length}`)
}

const encoded = parts.map((name) => readFileSync(join(recoveryDir, name), 'utf8').trim()).join('')
const archive = Buffer.from(encoded, 'base64')
const actualSha256 = createHash('sha256').update(archive).digest('hex')

if (actualSha256 !== expectedSha256) {
  throw new Error(`Recovery archive checksum mismatch: ${actualSha256}`)
}

const tempDir = mkdtempSync(join(tmpdir(), 'life-os-recovery-'))
const archivePath = join(tempDir, 'life-os.tar.gz')

try {
  writeFileSync(archivePath, archive)
  execFileSync('tar', ['-xzf', archivePath, '-C', root], { stdio: 'inherit' })
  console.log(`LIFE//OS source restored from ${parts.length} verified chunks.`)
} finally {
  rmSync(tempDir, { recursive: true, force: true })
}
