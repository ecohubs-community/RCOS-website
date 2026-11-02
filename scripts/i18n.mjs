/**
 * Shared i18n table for the downloads pipeline.
 *
 * The runtime UI uses messages/<locale>.json (Paraglide) — those keys describe
 * the website chrome (buttons, labels, headings). The build scripts produce
 * **artifacts** (md/docx/odt files) whose preambles, anchor labels, and
 * blockquote markers need to be in the same language as the bundle the user
 * downloads. This file owns those artifact-side strings.
 *
 * Keep this in sync with src/lib/i18n/languages.ts. When you add a locale to
 * the registry, add a matching entry here so the build scripts can produce its
 * bundle. The shape per-locale is intentionally identical to make adding a new
 * locale a copy-paste-and-translate job.
 */

export const DOWNLOADS_I18N = {
	en: {
		siteName: 'RCOS — Regenerative Community Operating System',
		// Preamble field labels
		generated: 'Generated',
		source: 'Source (latest version)',
		allTemplates: 'All RCOS templates',
		translatedFromEnglish:
			'This article is not yet translated to English — showing the English source.',
		// Section labels in the combined core spec
		toc: 'Table of Contents',
		aboutCore: 'About RCOS Core',
		coreSpecTitle: 'RCOS Core Specification — v0.1',
		// <details> flatten labels for non-HTML output
		rationale: 'Rationale',
		instructions: 'Instructions',
		// INDEX listing inside the per-format bundle
		bundleHeading: 'RCOS Templates',
		bundleIntro:
			'This bundle contains every RCOS template, ready to copy and adapt for your community.',
		bundleNote:
			'Each template includes a rationale block (why the section exists) and instructions (how to fill it in).',
		bundleNotePlain:
			'These templates contain only what you fill in. The version with explanations adds a rationale (why each section exists) and instructions (how to fill it in); download it from the templates page.',
		bundleSectionHeading: 'Templates'
	},
	de: {
		siteName: 'RCOS – Regenerative Community Operating System',
		generated: 'Generiert',
		source: 'Quelle (aktuelle Version)',
		allTemplates: 'Alle RCOS-Vorlagen',
		translatedFromEnglish:
			'Dieser Inhalt ist noch nicht ins Deutsche übersetzt – die englische Quelle wird angezeigt.',
		toc: 'Inhaltsverzeichnis',
		aboutCore: 'Über RCOS Core',
		coreSpecTitle: 'RCOS-Kernspezifikation — v0.1',
		rationale: 'Begründung',
		instructions: 'Anleitung',
		bundleHeading: 'RCOS-Vorlagen',
		bundleIntro:
			'Dieses Bündel enthält alle RCOS-Vorlagen, bereit zum Kopieren und Anpassen für eure Gemeinschaft.',
		bundleNote:
			'Jede Vorlage enthält einen Begründungsblock (warum der Abschnitt existiert) und eine Anleitung (wie er ausgefüllt wird).',
		bundleNotePlain:
			'Diese Vorlagen enthalten nur das, was ihr ausfüllt. Die Version mit Erläuterungen ergänzt eine Begründung (warum der Abschnitt existiert) und eine Anleitung (wie er ausgefüllt wird); ihr findet sie auf der Vorlagenseite.',
		bundleSectionHeading: 'Vorlagen'
	},
	es: {
		siteName: 'RCOS — Sistema Operativo de Comunidad Regenerativa',
		generated: 'Generado',
		source: 'Fuente (versión más reciente)',
		allTemplates: 'Todas las plantillas RCOS',
		translatedFromEnglish:
			'Este contenido aún no está traducido al español; se muestra la fuente en inglés.',
		toc: 'Índice',
		aboutCore: 'Acerca de RCOS Core',
		coreSpecTitle: 'Especificación RCOS Core — v0.1',
		rationale: 'Justificación',
		instructions: 'Instrucciones',
		bundleHeading: 'Plantillas RCOS',
		bundleIntro:
			'Este paquete contiene todas las plantillas RCOS, listas para copiar y adaptar a tu comunidad.',
		bundleNote:
			'Cada plantilla incluye un bloque de justificación (por qué existe la sección) e instrucciones (cómo rellenarla).',
		bundleNotePlain:
			'Estas plantillas contienen solo lo que hay que rellenar. La versión con explicaciones añade una justificación (por qué existe cada sección) e instrucciones (cómo rellenarla); se descarga desde la página de plantillas.',
		bundleSectionHeading: 'Plantillas'
	},
	fr: {
		siteName: "RCOS — Système d'Exploitation de Communauté Régénérative",
		generated: 'Généré',
		source: 'Source (version la plus récente)',
		allTemplates: 'Tous les modèles RCOS',
		translatedFromEnglish:
			"Ce contenu n'est pas encore traduit en français ; la source en anglais est affichée.",
		toc: 'Table des matières',
		aboutCore: 'À propos de RCOS Core',
		coreSpecTitle: 'Spécification RCOS Core — v0.1',
		rationale: 'Justification',
		instructions: 'Instructions',
		bundleHeading: 'Modèles RCOS',
		bundleIntro:
			'Ce paquet contient tous les modèles RCOS, prêts à être copiés et adaptés à votre communauté.',
		bundleNote:
			'Chaque modèle inclut un bloc de justification (pourquoi la section existe) et des instructions (comment la remplir).',
		bundleNotePlain:
			'Ces modèles ne contiennent que ce que vous remplissez. La version avec explications ajoute une justification (pourquoi chaque section existe) et des instructions (comment la remplir) ; elle se télécharge depuis la page des modèles.',
		bundleSectionHeading: 'Modèles'
	},
	'pt-br': {
		siteName: 'RCOS — Sistema Operacional de Comunidade Regenerativa',
		generated: 'Gerado em',
		source: 'Fonte (versão mais recente)',
		allTemplates: 'Todos os modelos RCOS',
		translatedFromEnglish:
			'Este conteúdo ainda não foi traduzido para o português; a fonte em inglês está sendo exibida.',
		toc: 'Sumário',
		aboutCore: 'Sobre o RCOS Core',
		coreSpecTitle: 'Especificação do RCOS Core — v0.1',
		rationale: 'Justificativa',
		instructions: 'Instruções',
		bundleHeading: 'Modelos RCOS',
		bundleIntro:
			'Este pacote contém todos os modelos RCOS, prontos para copiar e adaptar à sua comunidade.',
		bundleNote:
			'Cada modelo inclui um bloco de justificativa (por que a seção existe) e instruções (como preenchê-la).',
		bundleNotePlain:
			'Estes modelos contêm apenas o que você vai preencher. A versão com explicações acrescenta uma justificativa (por que cada seção existe) e instruções (como preenchê-la); baixe-a na página de modelos.',
		bundleSectionHeading: 'Modelos'
	}
};

/** Resolve a locale's strings, falling back to English for unknown codes. */
export function getStrings(locale) {
	return DOWNLOADS_I18N[locale] ?? DOWNLOADS_I18N.en;
}

/** All locales the downloads pipeline knows how to produce artifacts for. */
export const SUPPORTED_LOCALES = Object.keys(DOWNLOADS_I18N);
