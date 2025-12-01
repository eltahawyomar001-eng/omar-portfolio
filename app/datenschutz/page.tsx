"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück zur Startseite
        </Link>
      </div>

      {/* Content */}
      <motion.article
        className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light mb-12">
          Datenschutzerklärung
        </h1>

        {/* 1. Allgemeine Hinweise */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">1. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-lg font-medium text-white mb-3">Datenschutz</h3>
          <div className="text-white/70 leading-relaxed space-y-4 mb-6">
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
              dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die
              vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
              erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich.
            </p>
          </div>
        </section>

        {/* 2. Verantwortliche Stelle */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">2. Hinweis zur verantwortlichen Stelle</h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <address className="not-italic bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white">Omar Rageh</p>
              <p>Otfrid-von-Weißenburg-Straße 41</p>
              <p>36043 Fulda</p>
              <p>Deutschland</p>
              <p className="mt-2">
                Telefon:{" "}
                <a href="tel:+4917655093674" className="text-white hover:underline">
                  +49 176 55093674
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href="mailto:omarragehfulda@gmail.com" className="text-white hover:underline">
                  omarragehfulda@gmail.com
                </a>
              </p>
            </address>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </div>
        </section>

        {/* 3. Speicherdauer */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">3. Speicherdauer</h2>
          <p className="text-white/70 leading-relaxed">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
            Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
            berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
            werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
            letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>
        </section>

        {/* 4. Rechtsgrundlagen */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">4. Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung</h2>
          <p className="text-white/70 leading-relaxed">
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
            Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
            Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
            in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
            Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern die Datenverarbeitung zur Vertragserfüllung oder zur
            Durchführung vorvertraglicher Maßnahmen erforderlich ist, verarbeiten wir Ihre Daten auf Grundlage des
            Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer
            rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
            Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
            DSGVO erfolgen.
          </p>
        </section>

        {/* 5. Widerruf */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">5. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
          <p className="text-white/70 leading-relaxed">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
            bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
        </section>

        {/* 6. Widerspruchsrecht */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">6. Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen</h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p className="bg-white/5 p-4 rounded-lg border-l-4 border-white/30">
              <strong className="text-white">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie
                jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die
                Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Die jeweilige Rechtsgrundlage,
                auf der eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
                einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn,
                wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen,
                Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
              </strong>
            </p>
            <p className="bg-white/5 p-4 rounded-lg border-l-4 border-white/30">
              <strong className="text-white">
                Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das
                Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum
                Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher
                Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten
                anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2
                DSGVO).
              </strong>
            </p>
          </div>
        </section>

        {/* 7. Beschwerderecht */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">7. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet
              anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <p>
              Die zuständige Aufsichtsbehörde für Hessen ist:
            </p>
            <address className="not-italic bg-white/5 p-4 rounded-lg">
              <p className="font-medium text-white">Der Hessische Beauftragte für Datenschutz und Informationsfreiheit</p>
              <p>Postfach 3163</p>
              <p>65021 Wiesbaden</p>
              <p className="mt-2">
                Website:{" "}
                <a 
                  href="https://datenschutz.hessen.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  https://datenschutz.hessen.de
                </a>
              </p>
            </address>
          </div>
        </section>

        {/* 8. Recht auf Datenübertragbarkeit */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">8. Recht auf Datenübertragbarkeit</h2>
          <p className="text-white/70 leading-relaxed">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
            automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>
        </section>

        {/* 9. Auskunft, Löschung und Berichtigung */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">9. Auskunft, Löschung und Berichtigung</h2>
          <p className="text-white/70 leading-relaxed">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
            Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
            Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </p>
        </section>

        {/* 10. Einschränkung der Verarbeitung */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">10. Recht auf Einschränkung der Verarbeitung</h2>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p>
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht
              in folgenden Fällen:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen
                wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt
                der Löschung die Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
                Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                zu verlangen.
              </li>
            </ul>
            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
              ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
              juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union
              oder eines Mitgliedstaats verarbeitet werden.
            </p>
          </div>
        </section>

        {/* 11. SSL/TLS */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">11. SSL- bzw. TLS-Verschlüsselung</h2>
          <p className="text-white/70 leading-relaxed">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
            Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
            „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
            TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten
            mitgelesen werden.
          </p>
        </section>

        <hr className="border-white/10 my-12" />

        {/* 12. Datenerfassung auf dieser Website */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">12. Datenerfassung auf dieser Website</h2>

          {/* Server-Log-Dateien */}
          <h3 className="text-lg font-medium text-white mb-3 mt-8">Server-Log-Dateien</h3>
          <div className="text-white/70 leading-relaxed space-y-4 mb-8">
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
              dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
              hierzu müssen die Server-Log-Files erfasst werden.
            </p>
          </div>

          {/* Hosting */}
          <h3 className="text-lg font-medium text-white mb-3">Hosting</h3>
          <div className="text-white/70 leading-relaxed space-y-4 mb-8">
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Der Anbieter ist Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA (nachfolgend „Vercel").
            </p>
            <p>
              Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von Vercel
              verarbeitet. Hierbei können auch personenbezogene Daten an den Mutterkonzern von Vercel in die USA
              übermittelt werden. Die Datenübertragung in die USA wird auf die EU-Standardvertragsklauseln gestützt.
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{" "}
              <a 
                href="https://vercel.com/legal/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                https://vercel.com/legal/privacy-policy
              </a>
            </p>
            <p>
              Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein
              berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
            </p>
          </div>

          {/* Kontaktaufnahme */}
          <h3 className="text-lg font-medium text-white mb-3">Anfrage per E-Mail oder Telefon</h3>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p>
              Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
              uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
              Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO)
              oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
            <p>
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
              gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>
        </section>

        <hr className="border-white/10 my-12" />

        {/* 13. Analyse-Tools und Werbung */}
        <section className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-6">13. Analyse-Tools und Werbung</h2>

          {/* Meta Pixel */}
          <h3 className="text-lg font-medium text-white mb-3">Meta Pixel (ehemals Facebook Pixel)</h3>
          <div className="text-white/70 leading-relaxed space-y-4">
            <p>
              Diese Website nutzt zur Konversionsmessung den Besucheraktions-Pixel von Meta (Facebook). Anbieter
              dieses Dienstes ist die Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die
              erfassten Daten werden nach Aussage von Meta jedoch auch in die USA und in andere Drittländer
              übertragen.
            </p>
            <p>
              So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine
              Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die
              Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet werden
              und zukünftige Werbemaßnahmen optimiert werden.
            </p>
            <p>
              Die erhobenen Daten sind für uns als Betreiber dieser Website anonym, wir können keine Rückschlüsse
              auf die Identität der Nutzer ziehen. Die Daten werden aber von Meta gespeichert und verarbeitet,
              sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist und Meta die Daten für eigene
              Werbezwecke, entsprechend der Meta-Datenrichtlinie verwenden kann. Dadurch kann Meta das Schalten von
              Werbeanzeigen auf Seiten von Facebook sowie außerhalb von Facebook ermöglichen. Diese Verwendung der
              Daten kann von uns als Seitenbetreiber nicht beeinflusst werden.
            </p>
            <p>
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO
              und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p>
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt.
              Details finden Sie hier:{" "}
              <a 
                href="https://www.facebook.com/legal/EU_data_transfer_addendum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                https://www.facebook.com/legal/EU_data_transfer_addendum
              </a>
            </p>
            <p>
              Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und
              an Facebook weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal
              Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich
              (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die
              Erfassung der Daten und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende
              Verarbeitung durch Facebook ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam
              obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten.
              Den Wortlaut der Vereinbarung finden Sie unter:{" "}
              <a 
                href="https://www.facebook.com/legal/controller_addendum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                https://www.facebook.com/legal/controller_addendum
              </a>
            </p>
            <p>
              Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des
              Facebook-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website
              verantwortlich. Für die Datensicherheit der Facebook-Produkte ist Facebook verantwortlich.
              Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten Daten können
              Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind
              wir verpflichtet, diese an Facebook weiterzuleiten.
            </p>
            <p>
              In den Datenschutzhinweisen von Meta finden Sie weitere Hinweise zum Schutz Ihrer Privatsphäre:{" "}
              <a 
                href="https://de-de.facebook.com/about/privacy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                https://de-de.facebook.com/about/privacy/
              </a>
            </p>
            <p>
              Sie können außerdem die Remarketing-Funktion „Custom Audiences" im Bereich Einstellungen für
              Werbeanzeigen unter{" "}
              <a 
                href="https://www.facebook.com/ads/preferences/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                https://www.facebook.com/ads/preferences/
              </a>
              {" "}deaktivieren. Dazu müssen Sie bei Facebook angemeldet sein.
            </p>
            <p>
              Wenn Sie kein Facebook-Konto besitzen, können Sie nutzungsbasierte Werbung von Facebook auf der
              Website der European Interactive Digital Advertising Alliance deaktivieren:{" "}
              <a 
                href="http://www.youronlinechoices.com/de/praferenzmanagement/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                http://www.youronlinechoices.com/de/praferenzmanagement/
              </a>
            </p>
          </div>
        </section>

        <hr className="border-white/10 my-12" />

        <p className="text-white/40 text-sm">
          Quelle: Adaptiert von{" "}
          <a 
            href="https://www.e-recht24.de" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white/60"
          >
            e-recht24.de
          </a>
        </p>
      </motion.article>
    </main>
  );
}
